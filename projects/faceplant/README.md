# Faceplant — Parody 💀

Like Facebook, but it falls on its face. 50% of the time, it crashes every time.

## What it Parodies

Facebook — the social network. But with a 50% crash rate on startup, because reliability is overrated.

## How to Start

```bash
npm install
npm start
```

> **Note:** There's a 50% chance the app will crash on startup. This is intentional. Just run it again. And again. And again. Welcome to production.

## Port

- **Server**: 5325 (when it works)

## Special Features

- **50% crash rate**: The server throws `FACE_PLANT_EXCEPTION` on startup half the time
- **Early Facebook UI**: Looks like 2008 Facebook with the classic blue header
- **Realistic posts**: Your mom's birthday wishes, crypto bros, Farmville notifications
- **When it works, it works**: The other 50% of the time, it's a perfectly functional app

## Notes

- The crash is a `Math.random() < 0.5` check at startup
- Exit code 1 on crash
- No data is lost (there was no data to begin with)
- "50% uptime guaranteed" — it's in the SLA
