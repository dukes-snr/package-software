#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "${BASH_SOURCE[0]}")/.."
node -e 'if (Number(process.versions.node.split(".")[0]) !== 24) { console.error("Node.js 24 is required; use nvm install 24 && nvm use 24"); process.exit(1); }'
npm ci --no-audit --no-fund
npm run check
