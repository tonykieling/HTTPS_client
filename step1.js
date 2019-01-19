let https = require('https');

// let destiny = process.argv[2];

// if (!destiny) {
//   return (console.log("Please set the destiny"));
// }

let destiny = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html'
}

https.get(destiny, function (response){
  response.setEncoding('utf8');

  let count = 0;
  response.on('data', function (data){
    console.log(`- CHUNCK ${++count} RECEIVED AS:\n${data}`);
   });

  response.on('end', function (){
    console.log('Response stream has completed.');
    console.log("ending the process");
  });
console.log("done!");
})