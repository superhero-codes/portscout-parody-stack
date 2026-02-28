# SubSnack — Parody 🥨

A newsletter platform for snack reviews. Like Substack, but for pretzels, chips, and trail mix discourse.

## What it Parodies

Substack — the newsletter platform. But instead of politics and tech hot takes, it's all about snacks.

## Structure

```
subsnack/
├── app/
│   └── core/
│       └── platform/
│           └── runtime/
│               └── web/
│                   └── server/
│                       ├── index.js      ← The actual server (6 levels deep)
│                       └── public/
│                           └── index.html
└── package.json
```

> Yes, the server is 6 directories deep. No, we will not apologize.

## How to Start

```bash
npm install
npm run dev
```

> **Note:** The start script runs from `app/core/platform/runtime/`. If you need to find the actual server, it's in `app/core/platform/runtime/web/server/`. Or was it `app/core/platform/`? Honestly, just use `npm run dev`.

## Port

- **Server**: 5323

## Special Features

- **Deeply nested structure**: 6 levels of directories. Because enterprise architecture.
- **Clean blog UI**: Looks like a real newsletter platform
- **Intentionally confusing README**: The path mentioned above is wrong. The actual start script is correct though. Trust the `package.json`.
- **Substack-style design**: Georgia font, orange accents, subscribe forms

## Notes

- The folder depth is the joke
- The server actually works fine once you find it
- `npm run dev` handles everything — don't try to `cd` manually
- Snack opinions expressed are not those of the PortScout team
