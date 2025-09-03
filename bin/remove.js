#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const file = process.argv[2];

if (!file) {
  console.log("⚠️  Usage: cr <filename.js>");
  process.exit(1);
}

const filePath = path.resolve(process.cwd(), file);

if (!fs.existsSync(filePath)) {
  console.log(`❌ File not found: ${file}`);
  process.exit(1);
}

let code = fs.readFileSync(filePath, "utf8");

// Remove all console.* statements
code = code.replace(/console\.(log|error|warn|info)\s*\(.*\);?/g, "");

fs.writeFileSync(filePath, code, "utf8");

console.log(`🧹 ${path.basename(filePath)} : All console logs removed!`);
