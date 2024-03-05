// 引入 express module
var express = require('express');

// 產生一個 express instance - app
var app = express();

// Express 的重點所在! 稍後解釋
app.get('/', function(req, res){
  res.send('Hello World');
});

// 讓 express server 跑在 port 3000
app.listen(3000, function() {
    console.log("Listening on port 3000");
});