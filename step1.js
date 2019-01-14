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

  response.on('data', function (data){
    // console.log('Chunck received! ', data);
    wholeContent += data + " --- NEWLINEHERE!!!\n";
  });

  response.on('end', function (){
    // console.log('Response stream has completed.');
    console.log(wholeContent);
  });
  console.log(wholeContent + "\nEND");
})