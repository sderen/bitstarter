var express = require('express');
var fs = require('fs');
var path = require('path');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var buf = fs.readFileSync(path.resolve(__dirname, 'index.html'));
  var str = buf.toString();
  response.write(str);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
