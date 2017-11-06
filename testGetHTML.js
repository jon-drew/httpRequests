var https = require('https');

var getHTML = require('./getHTML');

function printHTML (html) {
  console.log(html);
}

var currentOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

console.log(getHTML(currentOptions, printHTML));