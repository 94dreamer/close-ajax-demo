/**
 * Created by zhouzhen on 2017/5/24.
 */
var express = require('express');

var app = express();

app.use(express.static('public'));

app.get('/',function (req,res) {
  console.log('hello');
  res.send('hello')
});

app.get('/upload',function (req,res) {
  console.log('upload');
  console.log(req);
  res.send('upload');
});


var server = app.listen(3000,function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('listening');
});