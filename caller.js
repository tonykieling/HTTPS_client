
let getHTML = require('./http-functions');

let host = process.argv[2];
let path = process.argv[3];

if (!host) {
  return (console.log("Please set the host, at least."));
}


let dataFromUser = {
  // host: 'sytantris.github.io',
  // path: '/http-examples/step1.html'
  host,
  path,
};


// function printHTML(data){
//   console.log(data);
// }

getHTML(dataFromUser);
// console.log("this is x: ", x);
