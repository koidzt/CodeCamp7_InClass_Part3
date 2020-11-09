const axios = require("axios");

// function main() {
//   axios.get("https://run.mocky.io/v3/4c4eb166-7c7a-4714-9b1f-be006984251b")
//     .then((response) => {
//       console.log(response.data);
//     })
//     .catch((err) => {
//       console.log("Error Data");
//       console.log(err)
//     });

//   axios.get("https://run.mocky.io/v3/2d10d997-3825-48c3-a5ac-f1cf128f1e98")
//     .then((response) => {
//       console.log(response.data);
//     })
//     .catch((err) => {
//       console.log("Error Data");
//       console.log(err);
//     });
// }

// main();

// function second() {
//   axios.get("https://run.mocky.io/v3/fc264e85-84a4-44d4-934e-faa0b5261c98")
//     .then((response) => {
//       const arr = response.data;
//       for(let ar of arr){
//         if(ar%2===0){
//           console.log(ar);
//         }
//       }
//     })
//     .catch((err) => {
//       console.log("Error Data");
//       console.log(err);
//     });
// }
// second();

// filter
// function third() {
//   axios.get("https://run.mocky.io/v3/fc264e85-84a4-44d4-934e-faa0b5261c98")
//     .then((response) => {
//       const arr = response.data;
//       const even = arr.filter(ar => ar % 2 === 0)
//       console.log(even);
//     });
// }
// third();

async function fourth() {
  try {
    const res = await axios.get("https://run.mocky.io/v3/fc264e85-84a4-44d4-934e-faa0b5261c98");
    console.log(res.data);

    const arr = res.data;
    for (let ar of arr) {
      if (ar % 2 === 0) {
        console.log(ar);
      }
    }
  } catch (err) {
    console.log(err);
  }

}
fourth();