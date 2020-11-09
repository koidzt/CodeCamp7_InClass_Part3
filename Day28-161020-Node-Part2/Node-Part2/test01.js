const os = require('os');

let tmem = os.totalmem();
let fmem = os.freemem();
let umem = tmem-fmem;
console.log(`Total RAM = ${tmem} and Free Memory = ${fmem}`);
console.log(`Usage = ${umem}`);

console.log(os.cpus());
console.log(os.type());