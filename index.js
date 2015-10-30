var express = require('express');
var app = express();

app.use(express.static('.'));
//
// app.get('/', function (req, res) {
//
// });

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('listening at http://%s:%s', host, port);
});
