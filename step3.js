
function getAndPrintHTML(){
  let https = require('https');

  let wholeContent = "";

  https.get(destiny, function (response) {    
    if (response.statusCode !== 200){
      console.log(`You're trying to reach:\n host = ${host} and \n path = ${path}, BUT`)
      return(console.log("Error: ", response.statusCode));
    }

    response.setEncoding('utf8');

    let count = 0;
    response.on('data', function (data){
      console.log('Chunck received! ', data);
      wholeContent += data + " --- NEWLINE (" + ++count + ")\n";
      console.log(data + " --- NEWLINE (" + count + ")\n");
    });

    response.on('end', function (){
      console.log('Response stream has completed.');
      console.log("ending the process");
      console.log("the wholeContent: \n" + wholeContent);
    });
  console.log("done!");
  });
};

let host = process.argv[2];
let path = process.argv[3];

destiny = {
  // host: 'sytantris.github.io',
  // path: '/http-examples/step1.html'
  host,
  path,
};

if (!destiny) {
  return (console.log("Please set the host, at least."));
}

getAndPrintHTML();