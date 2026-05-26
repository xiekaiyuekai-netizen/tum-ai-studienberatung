const fs = require("fs");
const path = require("path");

const root = __dirname;
const outDir = path.join(root, "dist");

fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(outDir, { recursive: true });

fs.copyFileSync(path.join(root, "index.html"), path.join(outDir, "index.html"));
fs.cpSync(path.join(root, "src"), path.join(outDir, "src"), { recursive: true });

console.log("Built static site to dist/");
