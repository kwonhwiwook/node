var express = require('express'); 
var app = express(); 

app.get('/', (req, res) => { 
  res.send('Hello World!'); 
});

var port = 3000; 
app.listen(port, () => { 
  console.log('server on! http://localhost:'+port); 
});