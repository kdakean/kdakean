#!/bin/sh

find . -type f \( -name "*.go" -o -name "*.json" -o -name "*.yaml" -o -name "*.jet.html" \) | entr -r ./run.sh
