// --- Read,Write File --- //
const fs = require("fs");
const os = require("os");

// --- ReadFile with Sync --- //
console.log("--- Read file with sync ---");
const data = fs.readFileSync("./readme.txt");
console.log(data.toString());

// --- ReadFile without Sync --- //
fs.readFile("./readme.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("--- Read file without sync ---");
  console.log(data);
});

// --- WriteFile without Sync --- //
let cpuDetail = os.cpus()[0].model;
let totalMemory = os.totalmem();
let osVersion = os.version();

const content = [
  `CPU: ${cpuDetail}`,
  `Total Memory: ${totalMemory}`,
  `OS Version: ${osVersion}`,
].join("\n");

fs.writeFile("sysinfo.txt", content.toString(), (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("--- Write file ---");
  console.log("Content is writed ...");
});
