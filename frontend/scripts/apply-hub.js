const fs = require("fs");
const path = require("path");

const hub = process.env.HUB || "ipamorelin";
const srcDir = path.join(__dirname, "..", "public-hubs", hub);
const destDir = path.join(__dirname, "..", "public");

if (!fs.existsSync(srcDir)) {
    console.error(`Hub "${hub}" não encontrado em public-hubs/`);
    process.exit(1);
}

["robots.txt", "sitemap.xml", "llms.txt", "llms-full.txt"].forEach((f) => {
    fs.copyFileSync(path.join(srcDir, f), path.join(destDir, f));
});

console.log(`Arquivos SEO do hub "${hub}" aplicados em public/`);
