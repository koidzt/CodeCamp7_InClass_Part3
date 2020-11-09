const fs = require('fs');

let data = fs.readFileSync('readme.txt');

console.log(data)
console.log(data.toString());

let arr = Array.from(data);
console.log(arr);