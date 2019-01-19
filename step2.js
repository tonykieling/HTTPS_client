
function getAndPrintHTML(){
  let https = require('https');

  let destiny = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  }

  let wholeContent = "";

  https.get(destiny, function (response){
    response.setEncoding('utf8');

    let count = 0;
    response.on('data', function (data){
      wholeContent += data;
      count++;
    });

    response.on('end', function (){
      console.log('Response stream has completed.');
      console.log(`ending the process after received ${count} chunks of data`);
      console.log("the wholeContent: \n" + wholeContent);
      console.log("done!\n");
    });
  });
}

getAndPrintHTML();