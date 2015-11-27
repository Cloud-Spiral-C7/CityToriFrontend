var express = require('express');
var app = express();

app.use(express.static('.'));
//
// app.get('/', function (req, res) {
//
// });
var clientPort = process.argv[2] || 3000;

var server = app.listen(clientPort, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('listening at http://%s:%s', host, port);
});
