var express = require('express');
var app = express();
app.use(express.static('public'));

app.get('/',function(req,res) {
  res.render("index.ejs");
  res.end();
});

app.get('/iniziamo',function(req,res) {
  res.render("iniziamo.ejs");
  res.end();
});

app.get('/interviste',function(req,res) {
  res.render("interviste.ejs");
  res.end();
});

app.listen(process.env.PORT, function () {
  console.log('Server avviato sulla porta '+process.env.PORT);
});
