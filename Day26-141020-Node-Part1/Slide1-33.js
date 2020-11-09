// const fs = require("fs");

// setTimeout(() => {
//   console.log("A");
//   setTimeout(() => {
//     console.log("B");
//     setTimeout(() => {
//       console.log("C");
//       setTimeout(() => {
//         console.log("D");
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);




// function logAndLor(alphabet, time) {
//   return new Promise((resolve, reject) => {
//       setTimeout(() => {
//           console.log(alphabet);
//           resolve();
//       }, time)
//   });
// }

// logAndLor("A", 1000)
//   .then(() => {
//     return logAndLor("B", 1000);
//   })
//   .then(() => {
//     return logAndLor("C", 1000);
//   })
//   .then(() => {
//     return logAndLor("D", 1000);
//   })
//   .then(() => {
//     return logAndLor("E", 1000);
//   })
//   .then(() => {
//     return logAndLor("F", 1000);
//   });

// async function runCode(){
//   await logAndLor("A", 1000);
//   await logAndLor("B", 1000);
//   await logAndLor("C", 1000);
//   await logAndLor("D", 1000);
//   await logAndLor("E", 1000);
// }
// runCode();




const fs = require("fs");

function logAndLor(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

logAndLor("sonter.txt")//ถ้ามีไฟล์ชื่อ sonter.txt จะอ่านไฟล์นั้น แต่ถ้าไม่มีจะขึ้น error
  .then((data) => {
    console.log(data);
    console.log("THEN");
  })
  .catch((err) => {
    console.log(err);
    console.log("CATCH");
  });