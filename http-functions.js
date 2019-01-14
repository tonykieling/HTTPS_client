
module.exports = function getHTML(destiny){
  let https = require('https');
  // console.log("XXXXXXXXXXXXXXXX: ", destiny);

  let wholeContent = "";

  https.get(destiny, function (response) {

    response.setEncoding('utf8');

    response.on('data', function (data){
      wholeContent += data;
    });

    response.on('end', function (){
      // console.log("YYYYYYYYYYY: ", wholeContent);
      // console.log("typeof: ", typeof(wholeContent));
      printHTML(wholeContent);
    });
  });

  function printHTML(data){
    console.log(data);
  }

};
