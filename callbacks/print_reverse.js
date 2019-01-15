
let getHTML = require('../module_callbacks');

let dataFromUser = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};


function printReverse(data){
  console.log("Printing REVERSE MODE function staring...");
  console.log(data.split(" ").reverse().join(" "));
}


getHTML(dataFromUser, printReverse, "Printing REVERSE MODE done!!");