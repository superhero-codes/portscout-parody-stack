# CPUStorm ⚡

A Go [`net/http`](projects/chaos-gremlins/cpustorm/main.go:7) service that spikes your CPU because silence is suspicious.

## Prerequisites

- Go 1.22+ installed

## Run

```bash
go run .
```

Run from [`projects/chaos-gremlins/cpustorm`](projects/chaos-gremlins/cpustorm).

## Port

- **Server**: `5331`

## Intentional behavior

- Every **5 seconds**, CPUStorm performs a **2-second busy loop**.
- It continuously logs each spike start/complete with incrementing spike number.
- Spikes continue as long as the process is running.

## Endpoints

- `GET /` — Parody Storm status UI (auto-refreshes every 5s)
- `GET /api/status` — JSON including at minimum:
    - `spikes`
    - `uptimeSeconds`

The JSON also includes extra parody flavor fields such as `fanSpeed` and `temperatureMood`.

## Port conflict story (preserved)

CPUStorm intentionally binds to **5331**, the same famous turf claimed by Napper (Ruby) in this parody stack. The collision story is part of the joke and is intentionally preserved.

## What PortScout should detect

- Runtime markers for Go (module + Go source):
    - [`go.mod`](projects/chaos-gremlins/cpustorm/go.mod)
    - [`main.go`](projects/chaos-gremlins/cpustorm/main.go)
- Listener on port `5331`
- Behavioral signal: periodic high-CPU spikes (2s busy loop every 5s)

## ⚠️ Warning

This app **intentionally spikes CPU usage**. Your fans will spin up. Your battery will drain faster. Nearby electronics may become emotionally available.
