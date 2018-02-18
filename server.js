var express = require('express');
var app = express();
var morgan = require('morgan');
var helmet = require('helmet');
app.use(express.static('public'));
app.use(morgan('combined'));
app.use(helmet());
app.get('/',function(req,res) {
  res.render("index.ejs");
  res.end();
});

app.get('/scanzano',function(req,res) {
  res.render("scanzano.ejs");
  res.end();
});

app.get('/temi',function(req,res) {
  res.render("temi.ejs");
  res.end();
});

app.get('/chisiamo',function(req,res) {
  res.render("chisiamo.ejs");
  res.end();
});

app.get('/pertusillo',function(req,res) {
  res.render("pertusillo.ejs");
  res.end();
});

let port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Server avviato sulla porta '+port);
});
