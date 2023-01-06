// let p = new Promise((resolve, reject) => {
//   let a = 1 + 1;
//   if (a == 2) {
//     resolve("success");
//   } else {
//     reject("failed");
//   }
// });

// p.then((message) => {
//   console.log("This is in the then " + message);
// }).catch((message) => console.log("This is in the catch " + message));

//promises replaces callback functions

//----------------------------ASYNC AWAIT----------------------------
//if we wanted to use a second parameter, we cannot do that with .then
//must have async before function
//must have await before all async code, otherwise it will return the Promise object and not the result of that promise being executed
async function doWork() {
  try {
    const response = await makeRequest("Google");
    console.log("Response recived");
    const procressResponse = await processRequest(response);
    console.log(procressResponse);
  } catch (err) {
    console.log(err);
  }
}

doWork();
