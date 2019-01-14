
function getHTML(destiny, callbackF){
  let https = require('https');
  console.log("XXXXXXXXXXXXXXXX: ", destiny, callbackF);

  let wholeContent = "";

  https.get(destiny, function (response) {    
    if (response.statusCode !== 200 && response.statusCode !== 301){
      console.log(response.statusCode);
      console.log(`You're trying to reach:\n host = ${host} and \n path = ${path}, BUT`)
      return(console.log("Error: ", response.statusCode));
    }

    response.setEncoding('utf8');

    let count = 0;
    response.on('data', function (data){
      wholeContent += data + " --- NEWLINE (" + ++count + ")\n";
      console.log(data + " --- NEWLINE (" + count + ")\n");
    });

    response.on('end', function (){
      callbackF(wholeContent);
    });
  console.log("done!");
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
}

getHTML(dataFromUser, printHTML);