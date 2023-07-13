#!/usr/bin/env bash
SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
cd "$SCRIPT_DIR"

set -e
git pull
npm install
npm run build
set +e
~/.local/bin/ttm stop server 2>/dev/null
~/.local/bin/ttm start server
