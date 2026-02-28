# MemEater 🍽️

A Node.js app with an intentional memory leak. It eats RAM for breakfast, lunch, and dinner.

## How to Start

```bash
npm install
npm start
```

## Port

- **Server**: 5330

## What it Does

- Allocates ~1MB of memory every 5 seconds
- Never frees it
- Logs heap usage to the console
- Has a web UI that auto-refreshes to show growing memory

## Endpoints

- `GET /` — Web UI showing memory stats (auto-refreshes)
- `GET /api/status` — JSON memory usage stats

## ⚠️ Warning

This app **intentionally leaks memory**. It will consume increasing amounts of RAM until killed. Do not leave it running unattended unless you enjoy watching your system swap.

## Notes

- The leak is an ever-growing array of 1MB strings
- Memory usage is logged every 5 seconds
- The web UI auto-refreshes every 5 seconds
- Kill it with Ctrl+C before your OS kills it for you
