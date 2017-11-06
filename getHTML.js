var https = require('https');

function printHTML (html) {
  console.log(html);
}

var currentOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

function getHTML (options, callback) {

  var responseString = ''

  var requestOptions = options;

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

console.log(getHTML(currentOptions, printHTML));