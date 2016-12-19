const express = require('express');
const app = express();

app.use("/", express.static(__dirname + '/build'));
var port = process.env.PORT || 3002;

app.listen(port, function () {
  console.log('petinder server now online!');
});

app.use(function(err, req, res, next){
  res.status(err.status || 500);
});
