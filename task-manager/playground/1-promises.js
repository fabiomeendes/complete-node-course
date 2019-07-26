// Callback example

// const doWorkCallback = (callback) => {
//   setTimeout(() => {
//     callback(undefined, 'NOT ERROR!');
//     callback('ERROR!', undefined);
//   }, 2000);
// };

// doWorkCallback((error, result) => {
//   if (error) {
//     return console.log(error, 'has an error');
//   }
//   console.log(result);
// });

// Promises example, is a enhancement of callback

const doWorkPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('SUCCESS!');
    reject('ERROR!');
  }, 2000);
})

doWorkPromise.then((result) => {
  console.log(result, 'there is no error');
}).catch((e) => {
  console.log(e, 'has an error');
})

//
//                               fulfilled
//                              /
// Promise      -- pending --> 
//                              \
//                               rejected
//
