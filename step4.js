
function getHTML(destiny, callbackF){
  let https = require('https');

  let wholeContent = "";

  https.get(destiny, function (response) {    
    if (response.statusCode !== 200 && response.statusCode !== 301){
      console.log(response.statusCode);
      console.log(`You're trying to reach:\n host = ${host} and \n path = ${path}, BUT`)
      return(console.log("Error: ", response.statusCode));
    }

    response.setEncoding('utf8');

    response.on('data', function (data){
      wholeContent += data;
    });

    response.on('end', function (){
      console.log("Receiving is done!");
      console.log("Calling print function.\n");
      callbackF(wholeContent);
    });
  });
};

let host = process.argv[2];
let path = process.argv[3];

dataFromUser = {
  // host: 'sytantris.github.io',
  // path: '/http-examples/step1.html'
  host,
  path,
};

if (!dataFromUser) {
  return (console.log("Please set the host, at least."));
}

function printHTML(data){
  console.log(data);
  console.log("Printing is done!\n");
}

getHTML(dataFromUser, printHTML);

// sytantris.github.io/http-examples/step1.html