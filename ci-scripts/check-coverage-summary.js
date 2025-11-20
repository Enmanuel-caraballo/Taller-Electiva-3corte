const fs = require("fs");
const summary = JSON.parse(
  fs.readFileSync("./coverage/coverage-summary.json", "utf8")
);

const threshold = 80; // Puedes cambiarlo a 70–90%

if (summary.total.lines.pct < threshold) {
  console.error(`Cobertura insuficiente: ${summary.total.lines.pct}%`);
  process.exit(1);
}

console.log(`Cobertura OK: ${summary.total.lines.pct}%`);
