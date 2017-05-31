#!/usr/bin/env node

const covefe = require('..');

process.stdin
    .pipe(covefe)
    .pipe(process.stdout)
    .on('end', () => process.exit());
