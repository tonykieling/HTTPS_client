
function getAndPrintHTML(){
  let https = require('https');

  let wholeContent = "";

  https.get(destiny, function (response) {    
    if (response.statusCode !== 200){
      console.log(`You're trying to reach:\n host = ${host} and \n path = ${path}, BUT`)
      return(console.log("Error: ", response.statusCode));
    }

    response.setEncoding('utf8');

    response.on('data', function (data){
      wholeContent += data;
    });

    response.on('end', function (){
      console.log('Response stream has completed.');
      console.log("ending the process");
      console.log("the wholeContent: \n" + wholeContent);
      console.log("done!\n");
    });
  });
};

let host = process.argv[2];
let path = process.argv[3];
if (!host) {
  return (console.log("Please set the host, at least."));
}
destiny = {
  // host: 'sytantris.github.io',
  // path: '/http-examples/step1.html'
  host,
  path,
};

getAndPrintHTML();