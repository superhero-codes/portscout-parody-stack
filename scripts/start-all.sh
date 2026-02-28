#!/bin/bash
# PortScout Parody Stack - Start All Projects
# Best-effort script to start all demo projects

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(dirname "$SCRIPT_DIR")"
PROJECTS_DIR="$ROOT_DIR/projects"

echo "🚀 Starting PortScout Parody Stack..."
echo "================================================"

# Store PIDs for cleanup
PIDS=()

cleanup() {
  echo ""
  echo "🛑 Stopping all projects..."
  for pid in "${PIDS[@]}"; do
    kill "$pid" 2>/dev/null || true
  done
  echo "✅ All projects stopped."
  exit 0
}

trap cleanup SIGINT SIGTERM

# ============================================================
# 🎬 streaming-and-chill
# ============================================================

# CornHub (React + Express) - Ports 5310, 5314
echo "🌽 Starting CornHub (ports 5310, 5314)..."
cd "$PROJECTS_DIR/streaming-and-chill/cornhub" && npm run dev &
PIDS+=($!)

# TubeYou (Angular CLI) - Port 5303
echo "▶️  Starting TubeYou (port 5303)..."
cd "$PROJECTS_DIR/streaming-and-chill/tubeyou" && npm start &
PIDS+=($!)

# SpotiPie (SvelteKit + WS) - Port 5301 (CONFLICT!) + WS 5311
# NOTE: This will conflict with Lotion on port 5301
echo "🥧 Starting SpotiPie (port 5301 CONFLICT + WS 5311)..."
cd "$PROJECTS_DIR/streaming-and-chill/spotipie" && npm run dev &
PIDS+=($!)

# Nestflix (Vue + Express monorepo) - Ports 5306, 5312
echo "🎬 Starting Nestflix (ports 5306, 5312)..."
cd "$PROJECTS_DIR/streaming-and-chill/nestflix" && pnpm dev &
PIDS+=($!)

# RockNRoll (Node/Express) - Port 5324
echo "🎸 Starting RockNRoll (port 5324)..."
cd "$PROJECTS_DIR/streaming-and-chill/rocknroll" && npm start &
PIDS+=($!)

# ============================================================
# 💼 corporate-cringe
# ============================================================

# Lotion (Vue 3 + Vite) - Port 5301
echo "📝 Starting Lotion (port 5301)..."
cd "$PROJECTS_DIR/corporate-cringe/lotion" && npm run dev &
PIDS+=($!)

# Snack (React + Vite) - Port 5302
echo "🥨 Starting Snack (port 5302)..."
cd "$PROJECTS_DIR/corporate-cringe/snack" && npm run dev &
PIDS+=($!)

# Strife (Next.js) - Port 5305
echo "💳 Starting Strife (port 5305)..."
cd "$PROJECTS_DIR/corporate-cringe/strife" && npm run dev &
PIDS+=($!)

# DocuSwine (SolidJS + Vite) - Port 5309
echo "🐷 Starting DocuSwine (port 5309)..."
cd "$PROJECTS_DIR/corporate-cringe/docuswine" && npm run dev &
PIDS+=($!)

# SubSnack (Node/Express, deeply nested) - Port 5323
echo "🥪 Starting SubSnack (port 5323)..."
cd "$PROJECTS_DIR/corporate-cringe/subsnack" && npm start &
PIDS+=($!)

# ============================================================
# 🦕 digital-fossils
# ============================================================

# MySpice (PHP) - Port 5323
# NOTE: Port conflict with SubSnack on 5323
echo "🌶️  Starting MySpice (port 5323 — PHP built-in server)..."
cd "$PROJECTS_DIR/digital-fossils/myspice" && php -S localhost:5323 &
PIDS+=($!)

# AltaVistaBaby (COBOL + HTML) — static files, no server needed
echo "🔍 Skipping AltaVistaBaby (static HTML — open index.html manually)"

# Napper (Ruby/Rack) - Port 5331
echo "😴 Starting Napper (port 5331 — Rack server)..."
cd "$PROJECTS_DIR/digital-fossils/napper" && bundle exec rackup -p 5331 &
PIDS+=($!)

# ============================================================
# 🤡 social-rejects
# ============================================================

# Faceplant (Node/Express) - Port 5325
# NOTE: 50% chance of crash on startup
echo "😵 Starting Faceplant (port 5325 — 50% crash chance)..."
cd "$PROJECTS_DIR/social-rejects/faceplant" && npm start &
PIDS+=($!)

# Finder (Svelte + Vite) - Port 5173
echo "🔎 Starting Finder (port 5173)..."
cd "$PROJECTS_DIR/social-rejects/finder" && npm run dev &
PIDS+=($!)

# OnlyFarms (Node/Express ×3 processes) - Ports 5320, 5321, 5322
echo "🌾 Starting OnlyFarms (ports 5320, 5321, 5322)..."
cd "$PROJECTS_DIR/social-rejects/onlyfarms" && npm start &
PIDS+=($!)

# GitPub (Next.js + Prisma monorepo) - Port 5308
echo "🍺 Starting GitPub (port 5308)..."
cd "$PROJECTS_DIR/social-rejects/gitpub" && pnpm dev &
PIDS+=($!)

# ============================================================
# ☁️  cloud-nine
# ============================================================

# DropBlox (Node + Docker) - Port 5315
echo "☁️  Starting DropBlox (port 5315)..."
cd "$PROJECTS_DIR/cloud-nine/dropblox" && npm start &
PIDS+=($!)

# Locker (Docker Compose) - Ports 5326-5329
# NOTE: Intentionally broken — docker compose will fail
echo "🔒 Starting Locker (ports 5326-5329 — intentionally broken)..."
cd "$PROJECTS_DIR/cloud-nine/locker" && docker compose up &
PIDS+=($!)

# AirBeanBean (React + Fastify monorepo) - Ports 5307, 5313
echo "☕ Starting AirBeanBean (ports 5307, 5313)..."
cd "$PROJECTS_DIR/cloud-nine/airbeanbean" && pnpm dev &
PIDS+=($!)

# ============================================================
# 👹 chaos-gremlins
# ============================================================

# MemEater (Node/Express) - Port 5330
# NOTE: Intentional memory leak
echo "🧠 Starting MemEater (port 5330 — memory leak)..."
cd "$PROJECTS_DIR/chaos-gremlins/memeater" && npm start &
PIDS+=($!)

# CPUStorm (Node/Express) - Port 5331
# NOTE: Intentional CPU spike; port conflict with Napper
echo "🔥 Starting CPUStorm (port 5331 — CPU spike)..."
cd "$PROJECTS_DIR/chaos-gremlins/cpustorm" && npm start &
PIDS+=($!)

# HideNSeek (Node/Express) - Port 5333
# NOTE: Returns random HTTP status codes
echo "🙈 Starting HideNSeek (port 5333 — random status codes)..."
cd "$PROJECTS_DIR/chaos-gremlins/hidenseek" && npm start &
PIDS+=($!)

# WaiterCom (Node/Express) - Port 5332
# NOTE: 30-second response delay
echo "⏳ Starting WaiterCom (port 5332 — 30s delay)..."
cd "$PROJECTS_DIR/chaos-gremlins/waitercom" && npm start &
PIDS+=($!)

# ============================================================
# 🃏 wildcard-drawer
# ============================================================

# CatTranslator (Static HTML/CSS/JS) — no server needed
echo "🐱 Skipping CatTranslator (static HTML — open index.html manually)"

# BeerFinder (Node/Express) - Port 5325
# NOTE: Port conflict with Faceplant on 5325
echo "🍺 Starting BeerFinder (port 5325)..."
cd "$PROJECTS_DIR/wildcard-drawer/beerfinder" && npm start &
PIDS+=($!)

# StackBucks (Java/Spring Boot) - Port 8088
echo "☕ Starting StackBucks (port 8088)..."
cd "$PROJECTS_DIR/stackbucks" && ./mvnw spring-boot:run &
PIDS+=($!)

# ============================================================
# 📺 silicon-valley
# ============================================================

# NipAlert (Vue 3 + Leaflet) - Port 6060
echo "🌡️  Starting NipAlert (port 6060)..."
cd "$PROJECTS_DIR/silicon-valley/nipalert" && npm run dev &
PIDS+=($!)

# Pied Piper (Vue 3 + Vite) - Port 5050
echo "📡 Starting Pied Piper (port 5050)..."
cd "$PROJECTS_DIR/silicon-valley/piedpiper" && npm run dev &
PIDS+=($!)

# Hooli Nucleus (Vue 3 + Vite) - Port 7070
echo "🏢 Starting Hooli Nucleus (port 7070)..."
cd "$PROJECTS_DIR/silicon-valley/hoolinucleus" && npm run dev &
PIDS+=($!)

echo ""
echo "================================================"
echo "✅ All projects starting!"
echo ""
echo "⚠️  Known port conflicts:"
echo "   • Lotion & SpotiPie both use port 5301"
echo "   • SubSnack & MySpice both use port 5323"
echo "   • Faceplant & BeerFinder both use port 5325"
echo "   • Napper & CPUStorm both use port 5331"
echo ""
echo "🐌 CornHub backend has a 2.5s startup delay"
echo "😵 Faceplant has a 50% chance of crashing on startup"
echo "🔒 Locker (Docker Compose) is intentionally broken"
echo "🧠 MemEater will gradually consume memory"
echo "🔥 CPUStorm will spike CPU usage"
echo "⏳ WaiterCom responds with 30s delays"
echo "🙈 HideNSeek returns random HTTP status codes"
echo ""
echo "Press Ctrl+C to stop all projects."
echo "================================================"

# Wait for all background processes
wait
