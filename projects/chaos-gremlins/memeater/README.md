# MemEater 🍽️

MemEater is now a Rust + Axum service with an **intentional memory leak**. It eats RAM for breakfast, lunch, and dinner.

## Prerequisites

- Rust toolchain installed (`rustc`, `cargo`)

## Run

```bash
cargo run
```

## Port

- **Server**: `5330` (binds to `0.0.0.0:5330`)

## Intentional Leak Behavior

- Allocates exactly **1,048,576 bytes (~1MB)** every 5 seconds
- Never frees allocated chunks
- Tracks leak ticks (one tick per 5-second allocation)
- Logs total allocated bytes every 5 seconds

## Endpoints

- `GET /` — parody UI showing leak growth (auto-refreshes every 5s)
- `GET /api/status` — JSON status including required fields:
    - `allocatedBytes`
    - `leakRateBytesPer5s` (always `1048576`)
    - `ticks`

## What PortScout Should Detect

- Rust runtime markers (`Cargo.toml`, `src/main.rs`, Axum/Tokio server)
- Service bound to port `5330`
- Ongoing leak pattern: +1MB every 5 seconds, never released
- Status endpoint at `/api/status` exposing leak counters and required fields

## ⚠️ Warning

This service **intentionally leaks memory** and will continue growing until terminated. Stop it with `Ctrl+C` before your OS stops it for you.
