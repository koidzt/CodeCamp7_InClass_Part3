function setTimeoutAndLog(input, millisec) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log(input);
      resolve();
    }, millisec);
  });
}

// setTimeoutAndLog('a', 1000)
//   .then(() => {
//     return setTimeoutAndLog('b', 1000)
//   })
//   .then(() => {
//     return setTimeoutAndLog('c', 1000)
//   })
//   .then(() => {
//     return setTimeoutAndLog('d', 1000)
//   })
//   .catch()

async function run() {
  await setTimeoutAndLog('a', 1000)
  await setTimeoutAndLog('b', 1000)
  await setTimeoutAndLog('c', 1000)
  await setTimeoutAndLog('d', 1000)
}

run();