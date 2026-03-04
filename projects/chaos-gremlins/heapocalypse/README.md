# Heapocalypse

Satirical Express service designed to intentionally leak memory for detection and stress testing.

## Warning

This project intentionally leaks memory over time. Test-only. Never run in production.

## Run

```bash
npm install
npm start
```

- Default URL: `http://localhost:5335`

## Endpoints

- `GET /` — basic service info.
- `GET /stats` — process memory usage + leak counters.
- `GET /leak?mb=20` — leak additional memory (default 5 MB, capped).
- `POST /burst` with JSON `{ "bursts": 10 }` — trigger larger leak bursts.

## Leak mechanics

- Background interval leaks chunks every ~1.5s.
- Leak endpoints retain buffers, strings, and objects in process-level arrays.
- Stats endpoint reports process memory and retained chunk counts.
