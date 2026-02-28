# HidenSeek 🎲

Every request is a surprise. Returns random HTTP status codes: 200, 404, 500, or 418.

## How to Start

```bash
npm install
npm start
```

## Port

- **Server**: 5333

## What it Does

- Every request to `/` returns a random HTTP status code
- Possible codes: 200 (OK), 404 (Not Found), 500 (Server Error), 418 (I'm a Teapot)
- Logs each returned code to the console
- Web UI shows the current status and recent history

## Endpoints

- `GET /` — Random status code with web UI
- `GET /api/status` — Random status code as JSON

## Notes

- The randomness is truly random (Math.random)
- The 418 "I'm a teapot" is a real HTTP status code (RFC 2324)
- Request history is kept in memory (last 20 requests)
- Great for testing error handling
