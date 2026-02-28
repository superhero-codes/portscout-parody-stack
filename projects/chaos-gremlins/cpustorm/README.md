# CPUStorm ⚡

A Node.js process that spikes your CPU. Because your fans weren't loud enough.

## How to Start

```bash
npm install
npm start
```

## Port

- **Server**: 5331

## What it Does

- Runs a busy loop for 2 seconds every 5 seconds
- Pegs one CPU core during each spike
- Logs CPU usage spikes to the console
- Has a web UI that auto-refreshes

## Endpoints

- `GET /` — Web UI showing spike stats (auto-refreshes)
- `GET /api/status` — JSON status with spike count

## ⚠️ Warning

This app **intentionally spikes CPU usage**. Your laptop fans will spin up. Your battery will drain faster. Your cat will be concerned.

## Notes

- The busy loop runs `Math.random()` in a tight loop for 2 seconds
- Spikes happen every 5 seconds
- Kill it with Ctrl+C when your laptop starts hovering
