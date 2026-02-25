#!/bin/bash
# PortScout Parody Stack - Install All Projects
# Runs npm install or pnpm install for every project

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

# npm projects
install_npm  "Lotion"     "$PROJECTS_DIR/lotion"
install_npm  "Snack"      "$PROJECTS_DIR/snack"
install_npm  "TubeYou"    "$PROJECTS_DIR/tubeyou"
install_npm  "SpotiPie"   "$PROJECTS_DIR/spotipie"
install_npm  "Strife"     "$PROJECTS_DIR/strife"
install_npm  "DocuSwine"  "$PROJECTS_DIR/docuswine"
install_npm  "DropBlox"   "$PROJECTS_DIR/dropblox"

# CornHub has separate frontend/backend
echo "📥 [CornHub] npm install (frontend + backend)..."
if (cd "$PROJECTS_DIR/cornhub" && npm run install:all 2>&1); then
  echo "✅ [CornHub] done"
else
  echo "❌ [CornHub] failed"
  FAILED+=("CornHub")
fi
echo ""

# pnpm monorepos
install_pnpm "Nestflix"     "$PROJECTS_DIR/nestflix"
install_pnpm "AirBeanBean"  "$PROJECTS_DIR/airbeanbean"
install_pnpm "GitPub"       "$PROJECTS_DIR/gitpub"

echo "================================================"
if [ ${#FAILED[@]} -eq 0 ]; then
  echo "✅ All 11 projects installed successfully!"
else
  echo "⚠️  ${#FAILED[@]} project(s) failed: ${FAILED[*]}"
  echo "   Try installing them individually to see the full error."
  exit 1
fi
echo "================================================"
