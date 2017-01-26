#!/bin/sh
set -e

FILES=$(find src/components/ -type f -name '*.jsx')

for f in $FILES; do
  # FILE_NAME=$(echo "$f" | cut -d. -f1)
  # cat "$f" | react2dts --top-level-module > "$FILE_NAME.d.ts" &
  echo "Updating $f"
  node resources/scripts/gen-dts.js $f
done

wait
