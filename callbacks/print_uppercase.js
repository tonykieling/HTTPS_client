
let getHTML = require('../module_callbacks');

let dataFromUser = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};


function printLowerCase(data){
  console.log("Printing LOWERCASE MODE function staring...");
  console.log(data.toLowerCase());
}


getHTML(dataFromUser, printLowerCase, "Printing UPPERCASE MODE done!!");
