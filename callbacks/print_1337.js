
let getHTML = require('../module_callbacks');

let dataFromUser = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};


function print1337(data){
  console.log("Printing 1337 MODE function starting...");
  // console.log(data.toUpperCase());
  console.log(f1337(data));
}


getHTML(dataFromUser, print1337, "Printing 1337 MODE done!!");


// console.log(("aeolst --- 'ck' : 'x', 'er' : '0r', 'you' : 'j00'"));
// console.log(f1337("aeolst --- 'ck' : 'x', 'er' : '0r', 'you' : 'j00'"));

function f1337(argument){
  let newVar = "";
  for (let i = 0; i < argument.length; i++){
      let unhashed = argument[i];
      switch (unhashed){
          case 'a':
              newVar += "4";
              break;
          case 'o':
              newVar += "0";
              break;
          case 'l':
              newVar += "1";
              break;
          case 's':
              newVar += "5";
              break;
          case 't':
              newVar += "7";
              break;
          case 'c':
              if ((argument[i+1]) === "k"){
                newVar += "x";
                i++;
                break;
              }         
          case 'e':
              if ((argument[i+1]) === "r"){
                newVar += "0r";
                i++;
              } else {
                newVar += "3";
              }
              break;
          case 'y':
              if ((argument[i+1]) === "o"){
                if ((argument[i+2]) === "u"){
                  newVar += "j00";
                  i += 2;
                  break;
                }
              }         

          default:
              newVar += unhashed;
      }
      
  }
  return newVar;
}
