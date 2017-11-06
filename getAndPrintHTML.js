var https = require('https');

function getAndPrintHTMLChunks () {

  var responseString = ''

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function (response) {

    response.setEncoding('utf8');

    response.on('data', function(data) {
      responseString += String(data);
    });

    response.on('end', function() {
      console.log('Response stream complete: ' + responseString);
    });

  });

}

console.log(getAndPrintHTMLChunks());