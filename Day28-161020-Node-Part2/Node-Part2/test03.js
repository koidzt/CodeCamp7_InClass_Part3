const fs = require('fs');

fs.readFile('./readme.txt',(err,data)=>{
  if (err) {
    console.log('Error...');
    return
  }
  console.log(data.toString());
});

fs.readFile('./codecamp.txt',(err,data)=>{
  if (err) {
    console.log('Error...');
    return
  }
  console.log(data.toString());
});