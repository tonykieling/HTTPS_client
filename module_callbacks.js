
module.exports = function getHTML(destiny, callback, message){
  let https = require('https');

  let wholeContent = "";

  https.get(destiny, function (response) {

    response.setEncoding('utf8');

    response.on('data', function (data){
      wholeContent += data;
    });

    response.on('end', function() {
      callback(wholeContent);
      // console.log(message);
    });
  });
};
