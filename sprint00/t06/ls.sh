#!/bin/zsh
ls -lsh $1 | awk '{if (NR != 1) print $10, $6}'
