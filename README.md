<h1 align="center">
  🕵️ PortScout Parody Stack
</h1>

<p align="center">
  <strong>11 fake apps. Real frameworks. Zero business models.</strong>
</p>

<p align="center">
  <em>"We couldn't afford the real apps, so we built knockoffs."</em>
</p>

<p align="center">
  🍕 Snack &nbsp;·&nbsp; 📺 TubeYou &nbsp;·&nbsp; 🎵 SpotiPie &nbsp;·&nbsp; 💳 Strife &nbsp;·&nbsp; 🎬 Nestflix &nbsp;·&nbsp; 🏠 AirBeanBean<br/>
  🍺 GitPub &nbsp;·&nbsp; 🐷 DocuSwine &nbsp;·&nbsp; 🌽 CornHub &nbsp;·&nbsp; 📦 DropBlox &nbsp;·&nbsp; 📝 Lotion
</p>

---

Welcome to the **PortScout Parody Stack** — a lovingly crafted collection of 11 fake-but-functional web apps that parody the tech giants you know and ~~love~~ tolerate. Each project is a real, runnable application built with real frameworks, real tooling, and absolutely zero real business models.

**Why does this exist?** Because [PortScout](https://portscout.app) needed a playground full of misbehaving dev servers, port conflicts, slow backends, and monorepo madness. Think of it as a petting zoo, but instead of goats, it's full of `node_modules`.

---

## 🎭 The Lineup

_Eleven apps walk into a port range..._

| #   | Project         | Parodies | Stack                       | Port(s)       | Dev Command       | Personality Traits                        |
| --- | --------------- | -------- | --------------------------- | ------------- | ----------------- | ----------------------------------------- |
| 1   | **Lotion**      | Notion   | Vue 3 + Vite                | 5301          | `npm run dev`     | ⚠️ Picks fights with SpotiPie over ports  |
| 2   | **Snack**       | Slack    | React + Vite                | 5302          | `npm run dev`     | 🍕 Less productive than the original      |
| 3   | **TubeYou**     | YouTube  | Angular CLI                 | 5303          | `npm start`       | 📺 All the boilerplate, none of the ads   |
| 4   | **SpotiPie**    | Spotify  | SvelteKit + WS              | 5301, WS:5311 | `npm run dev:all` | ⚠️ Also wants port 5301. Drama ensues. 🔌 |
| 5   | **Strife**      | Stripe   | Next.js                     | 5305          | `npm run dev`     | 💳 Charges nothing, delivers nothing      |
| 6   | **Nestflix**    | Netflix  | Vue + Express (monorepo)    | 5306, 5312    | `pnpm dev`        | 📦 Monorepo. Still buffering.             |
| 7   | **AirBeanBean** | Airbnb   | React + Fastify (monorepo)  | 5307, 5313    | `pnpm dev`        | 📦 Monorepo. $200/night cleaning fee.     |
| 8   | **GitPub**      | GitHub   | Next.js + Prisma (monorepo) | 5308          | `pnpm dev`        | 📦 Monorepo. Where code goes to drink.    |
| 9   | **DocuSwine**   | DocuSign | SolidJS + Vite              | 5309          | `npm run dev`     | 🐷 Sign here, here, and here. Oink.       |
| 10  | **CornHub**     | 🌽       | React + Express             | 5310, 5314    | `npm run dev`     | 🐌 Suspiciously slow backend              |
| 11  | **DropBlox**    | Dropbox  | Node + Docker               | 5315          | `npm start`       | 🐳 Containerized. Fancy.                  |

---

## 💥 Special Scenarios

_Because well-behaved apps don't test anything interesting._

| Scenario          | Project(s)                    | What Goes Wrong                                                            |
| ----------------- | ----------------------------- | -------------------------------------------------------------------------- |
| **Port Conflict** | Lotion + SpotiPie             | Both want port 5301. Neither will compromise. It's like a parking dispute. |
| **WebSocket**     | SpotiPie                      | WS server on 5311. Because HTTP was too mainstream.                        |
| **Slow Start**    | CornHub                       | 2.5s startup delay + slow endpoint. Simulates "works on my machine."       |
| **Docker**        | DropBlox                      | Includes Dockerfile. For when you want problems in a container.            |
| **Monorepos**     | Nestflix, AirBeanBean, GitPub | pnpm workspaces. Three times the `node_modules`, three times the fun.      |

---

## 🗺️ Port Map (5301–5315)

_A carefully curated range of ports, lovingly assigned and immediately fought over._

```
5301  Lotion (Vue)            ⚠️ CONFLICT — "I was here first!"
5301  SpotiPie (SvelteKit)    ⚠️ CONFLICT — "No, I was here first!"
5302  Snack (React)           🍕 Peacefully snacking
5303  TubeYou (Angular)       📺 Buffering...
5304  (reserved)              🪑 Saving this seat
5305  Strife (Next.js)        💳 Processing...
5306  Nestflix Web (Vue)      🎬 Now streaming
5307  AirBeanBean Web         🏠 Superhost™
5308  GitPub Web (Next.js)    🍺 Open source, open bar
5309  DocuSwine (SolidJS)     🐷 Please sign the oinkument
5310  CornHub Frontend        🌽 Family friendly, we promise
5311  SpotiPie WS Server      🔌 WebSocket vibes
5312  Nestflix API (Express)   🎬 The backend nobody asked for
5313  AirBeanBean API         ⚡ Fastify goes brrr
5314  CornHub Backend         🐌 Taking its sweet time
5315  DropBlox API (Express)   🐳 Dockerized and dignified
```

---

## 🚀 Quick Start

### Individual Projects

```bash
cd projects/<project-name>
npm install   # or pnpm install for monorepos
npm run dev   # or pnpm dev for monorepos
```

### Install Everything (Go Make Coffee)

```bash
# Install dependencies for all 11 projects in one go
./scripts/install-all.sh
```

> **Heads up:** This installs npm + pnpm dependencies across 11 projects. Your internet connection will be tested. Your patience will be tested more.

### All Projects at Once (Chaos Mode)

```bash
# Unleash all 11 apps simultaneously. Your CPU will love you.
./scripts/start-all.sh

# When you've seen enough
./scripts/stop-all.sh
```

> **Pro tip:** Running all projects at once is a great way to test your laptop's fan speed.

---

## 🎨 Branding

All web UIs include the PortScout attribution footer per [`branding/footer.html`](branding/footer.html). See [`branding/README.md`](branding/README.md) for guidelines on how to make things look official while being entirely unofficial.

---

## 📜 Attribution

See [ATTRIBUTION.md](ATTRIBUTION.md) for full attribution details. We stand on the shoulders of giants (and their npm packages).

## ⚖️ License

See [LICENSE](LICENSE). It's MIT, so go wild. Just don't blame us when CornHub shows up in your commit history.

---

<p align="center">
  <i>Built with ❤️, caffeine, and questionable naming decisions.</i>
</p>
