
let getHTML = require('./http-functions');

let host = process.argv[2];
let path = process.argv[3];

let dataFromUser = {
  // host: 'sytantris.github.io',
  // path: '/http-examples/step1.html'
  host,
  path,
};

if (!dataFromUser) {
  return (console.log("Please set the host, at least."));
}

// function printHTML(data){
//   console.log(data);
// }

getHTML(dataFromUser);
// console.log("this is x: ", x);
