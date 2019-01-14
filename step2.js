
function getAndPrintHTML(){
  let https = require('https');

  // let destiny = process.argv[2];

  // if (!destiny) {
  //   return (console.log("Please set the destiny"));
  // }

  let destiny = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  }

  let wholeContent = "";

  https.get(destiny, function (response){
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
}

getAndPrintHTML();