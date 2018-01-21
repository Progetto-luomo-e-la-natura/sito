var express = require('express');
var app = express();
app.use(express.static('public'));

app.get('/',function(req,res) {
  res.render("index.ejs");
  res.end();
});

app.get('/temi',function(req,res) {
  res.render("temi.ejs");
  res.end();
});

app.get('/interviste',function(req,res) {
  res.render("interviste.ejs");
  res.end();
});
let port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Server avviato sulla porta '+port);
});
