#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const file = process.argv[2];

if (!file) {
  console.log("⚠️  Usage: ct <filename.js>");
  process.exit(1);
}

const filePath = path.resolve(process.cwd(), file);

if (!fs.existsSync(filePath)) {
  console.log(`❌ File not found: ${file}`);
  process.exit(1);
}

const code = fs.readFileSync(filePath, "utf8");
const matches = code.match(/console\.(log|error|warn|info)\s*\(.*\);?/g);
const count = matches ? matches.length : 0;

console.log(`📟 Console Count: ${count} : ${path.basename(filePath)}`);
