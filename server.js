var express = require('express');
var app = express();
app.use(express.static('public'));

app.get('/',function(req,res) {
  res.render("index.ejs");
});

app.get('/iniziamo',function(req,res) {
  res.render("iniziamo.ejs");
});

app.listen(process.env.PORT, function () {
  console.log('Server avviato sulla porta '+process.env.PORT);
});
