#!/bin/bash
# PortScout Parody Stack - Install All Projects
# Runs npm install, pnpm install, or bundle install for every project

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(dirname "$SCRIPT_DIR")"
PROJECTS_DIR="$ROOT_DIR/projects"

echo "📦 Installing all PortScout Parody Stack dependencies..."
echo "================================================"
echo ""

FAILED=()

install_npm() {
  local name="$1"
  local dir="$2"
  echo "📥 [$name] npm install..."
  if (cd "$dir" && npm install --no-fund --no-audit 2>&1); then
    echo "✅ [$name] done"
  else
    echo "❌ [$name] failed"
    FAILED+=("$name")
  fi
  echo ""
}

install_pnpm() {
  local name="$1"
  local dir="$2"
  echo "📥 [$name] pnpm install..."
  if (cd "$dir" && pnpm install --no-frozen-lockfile 2>&1); then
    echo "✅ [$name] done"
  else
    echo "❌ [$name] failed"
    FAILED+=("$name")
  fi
  echo ""
}

install_bundle() {
  local name="$1"
  local dir="$2"
  echo "📥 [$name] bundle install..."
  if (cd "$dir" && bundle install 2>&1); then
    echo "✅ [$name] done"
  else
    echo "❌ [$name] failed"
    FAILED+=("$name")
  fi
  echo ""
}

# ============================================================
# 🎬 streaming-and-chill
# ============================================================

# CornHub has separate frontend/backend
echo "📥 [CornHub] npm install (frontend + backend)..."
if (cd "$PROJECTS_DIR/streaming-and-chill/cornhub" && npm run install:all 2>&1); then
  echo "✅ [CornHub] done"
else
  echo "❌ [CornHub] failed"
  FAILED+=("CornHub")
fi
echo ""

install_npm  "TubeYou"    "$PROJECTS_DIR/streaming-and-chill/tubeyou"
install_npm  "SpotiPie"   "$PROJECTS_DIR/streaming-and-chill/spotipie"
install_pnpm "Nestflix"   "$PROJECTS_DIR/streaming-and-chill/nestflix"
install_npm  "RockNRoll"  "$PROJECTS_DIR/streaming-and-chill/rocknroll"

# ============================================================
# 💼 corporate-cringe
# ============================================================

install_npm  "Lotion"     "$PROJECTS_DIR/corporate-cringe/lotion"
install_npm  "Snack"      "$PROJECTS_DIR/corporate-cringe/snack"
install_npm  "Strife"     "$PROJECTS_DIR/corporate-cringe/strife"
install_npm  "DocuSwine"  "$PROJECTS_DIR/corporate-cringe/docuswine"
install_npm  "SubSnack"   "$PROJECTS_DIR/corporate-cringe/subsnack"

# ============================================================
# 🦕 digital-fossils
# ============================================================

# myspice (PHP) — no npm install needed
# altavistababy (COBOL + HTML) — no install needed
install_bundle "Napper"   "$PROJECTS_DIR/digital-fossils/napper"

# ============================================================
# 🤡 social-rejects
# ============================================================

install_npm  "Faceplant"  "$PROJECTS_DIR/social-rejects/faceplant"
install_npm  "Finder"     "$PROJECTS_DIR/social-rejects/finder"
install_npm  "OnlyFarms"  "$PROJECTS_DIR/social-rejects/onlyfarms"
install_pnpm "GitPub"     "$PROJECTS_DIR/social-rejects/gitpub"

# ============================================================
# ☁️  cloud-nine
# ============================================================

install_npm  "DropBlox"      "$PROJECTS_DIR/cloud-nine/dropblox"
# locker (Docker Compose only) — no install needed
install_pnpm "AirBeanBean"   "$PROJECTS_DIR/cloud-nine/airbeanbean"

# ============================================================
# 👹 chaos-gremlins
# ============================================================

install_npm  "MemEater"   "$PROJECTS_DIR/chaos-gremlins/memeater"
install_npm  "CPUStorm"   "$PROJECTS_DIR/chaos-gremlins/cpustorm"
install_npm  "HideNSeek"  "$PROJECTS_DIR/chaos-gremlins/hidenseek"
install_npm  "WaiterCom"  "$PROJECTS_DIR/chaos-gremlins/waitercom"

# ============================================================
# 🃏 wildcard-drawer
# ============================================================

# cattranslator (static HTML) — no install needed
install_npm  "BeerFinder"  "$PROJECTS_DIR/wildcard-drawer/beerfinder"

# ============================================================

echo "================================================"
if [ ${#FAILED[@]} -eq 0 ]; then
  echo "✅ All projects installed successfully!"
else
  echo "⚠️  ${#FAILED[@]} project(s) failed: ${FAILED[*]}"
  echo "   Try installing them individually to see the full error."
  exit 1
fi
echo "================================================"
