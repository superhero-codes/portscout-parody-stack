# Waiter.com — Parody 🌤️

Your local weather forecast. Fast, reliable, accurate.

## What it Parodies

Weather.com — the weather forecasting website. Our forecasts are just as accurate.

## Prerequisites

- .NET 8 SDK

## How to Start

```bash
dotnet run
```

## Port

- **Server**: 5332

## Features

- **Beautiful weather UI**: Gradient sky background, 5-day forecast
- **Current conditions**: Temperature, humidity, wind speed
- **Location-based**: Always shows weather for "Localhost, Port 5332"
- **Fast and responsive**: The UI loads instantly. The data... also loads. Eventually.

## Endpoints

- `GET /` — serves the Weather.com-ish parody UI
- `GET /api/weather` — mock weather payload for the UI
- `GET /api/health` — simple `{ "status": "ok" }` health check

## Notes

- The forecast data is mocked
- The UI is inspired by modern weather apps
- Requests are handled with a very patient pipeline before responses are finalized

## PortScout Detection Clues

- Runtime markers: `.csproj` + .NET 8 Minimal API entrypoint (`Program.cs`)
- Behavioral marker: every HTTP response takes about 30 seconds (including `/`, static assets, and API routes)
