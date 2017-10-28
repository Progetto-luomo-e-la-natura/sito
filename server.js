express = require('express');
var app = express();
app.use(express.static('public'));


app.listen(process.env.PORT, function () {
  console.log('Server avviato sulla porta '+process.env.PORT);
});
