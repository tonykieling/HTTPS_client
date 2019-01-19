
let getHTML = require('../module_callbacks');

let dataFromUser = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};


function printUpperCase(data){
  console.log("Printing UPPERCASE MODE function staring...");
  console.log(data.toUpperCase());
}


getHTML(dataFromUser, printUpperCase, "Printing UPPERCASE MODE done!!");
