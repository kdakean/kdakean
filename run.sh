#!/bin/sh

pkill kdakean && echo "Sent kill"
rm -f ./kdakean && echo "Remove old binary"

echo "Build & Run..."
go build && ./kdakean
