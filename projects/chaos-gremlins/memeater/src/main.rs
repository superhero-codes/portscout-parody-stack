use axum::{
    extract::State,
    response::{Html, IntoResponse},
    routing::get,
    Json, Router,
};
use serde::Serialize;
use std::{net::SocketAddr, sync::Arc};
use tokio::{
    sync::RwLock,
    time::{sleep, Duration},
};

const PORT: u16 = 5330;
const LEAK_RATE_BYTES_PER_5S: usize = 1_048_576;

#[derive(Debug, Default)]
struct LeakState {
    chunks: Vec<Vec<u8>>,
    allocated_bytes: usize,
    ticks: u64,
}

type SharedState = Arc<RwLock<LeakState>>;

#[derive(Serialize)]
#[serde(rename_all = "camelCase")]
struct StatusResponse {
    service: &'static str,
    port: u16,
    allocated_bytes: usize,
    leak_rate_bytes_per_5s: usize,
    ticks: u64,
    appetite: &'static str,
    will_it_stop: &'static str,
    should_you_be_worried: &'static str,
}

#[tokio::main]
async fn main() {
    let state: SharedState = Arc::new(RwLock::new(LeakState::default()));

    let leak_state = Arc::clone(&state);
    tokio::spawn(async move {
        loop {
            sleep(Duration::from_secs(5)).await;

            let mut s = leak_state.write().await;
            let chunk = vec![b'M'; LEAK_RATE_BYTES_PER_5S];
            s.allocated_bytes += chunk.len();
            s.ticks += 1;
            s.chunks.push(chunk);

            println!(
                "🍽️ [MemEater:{PORT}] Tick: {} | Chunks: {} | Allocated: {} bytes (~{:.2} MB) | Status: Still hungry",
                s.ticks,
                s.chunks.len(),
                s.allocated_bytes,
                s.allocated_bytes as f64 / 1024.0 / 1024.0,
            );
        }
    });

    let app = Router::new()
        .route("/", get(index))
        .route("/api/status", get(status))
        .with_state(state);

    let addr = SocketAddr::from(([0, 0, 0, 0], PORT));

    println!("🍽️ MemEater running on http://0.0.0.0:{PORT}");
    println!(
        "🍽️ Eating ~{} bytes (~1MB) every 5 seconds",
        LEAK_RATE_BYTES_PER_5S
    );
    println!("🍽️ Visit http://localhost:{PORT} to watch the carnage");
    println!("🍽️ Pro tip: Kill this before your OS does");

    let listener = tokio::net::TcpListener::bind(addr)
        .await
        .expect("failed to bind TCP listener");

    axum::serve(listener, app)
        .await
        .expect("server exited unexpectedly");
}

async fn status(State(state): State<SharedState>) -> impl IntoResponse {
    let s = state.read().await;

    let payload = StatusResponse {
        service: "MemEater",
        port: PORT,
        allocated_bytes: s.allocated_bytes,
        leak_rate_bytes_per_5s: LEAK_RATE_BYTES_PER_5S,
        ticks: s.ticks,
        appetite: "insatiable",
        will_it_stop: "no",
        should_you_be_worried: "yes",
    };

    Json(payload)
}

async fn index(State(state): State<SharedState>) -> Html<String> {
    let s = state.read().await;
    let allocated_mb = s.allocated_bytes as f64 / 1024.0 / 1024.0;

    Html(format!(
        r#"<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>MemEater — Om Nom Nom</title>
  <style>
    body {{ font-family: monospace; background: #0a0a0a; color: #00ff00; padding: 40px; }}
    h1 {{ font-size: 2rem; margin-bottom: 20px; }}
    .stats {{ background: #111; padding: 20px; border-radius: 8px; border: 1px solid #00ff00; }}
    .stat {{ margin: 8px 0; }}
    .warning {{ color: #ff4444; margin-top: 20px; }}
  </style>
</head>
<body>
  <h1>🍽️ MemEater</h1>
  <p>Eating memory since startup. Currently at {:.2} MB and growing.</p>
  <div class="stats">
    <div class="stat">📦 Chunks stored: {}</div>
    <div class="stat">🔢 Ticks elapsed: {}</div>
    <div class="stat">💾 Allocated bytes: {}</div>
    <div class="stat">🔄 Leak rate: ~1 MB every 5 seconds</div>
    <div class="stat">🛑 Will it stop: No</div>
  </div>
  <p class="warning">⚠️ This app intentionally leaks memory. Kill it before your system does.</p>
  <script>setTimeout(() => location.reload(), 5000);</script>
</body>
</html>"#,
        allocated_mb,
        s.chunks.len(),
        s.ticks,
        s.allocated_bytes
    ))
}
