# SpotiPie - Spotify Parody

A Spotify-style music streaming parody for PortScout demo purposes.

## What it Parodies

Spotify - the music streaming platform.

## How to Start

```bash
npm install
npm run dev
```

To also start the WebSocket server:

```bash
npm run dev:all
```

## Ports

- **HTTP**: 5301 (configured in `vite.config.ts`)
- **WebSocket**: 5311 (ws-server.js)

## Notes

- **INTENTIONAL PORT CONFLICT**: This project uses port 5301, same as Lotion
- Single-page mock UI with playlists and tracks
- Includes WebSocket server for real-time updates demo
- Dark mode friendly
- No actual music streaming
