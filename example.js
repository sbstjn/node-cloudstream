var app     = require('express').createServer();
var stream  = require('./cloudstream').withUser('mail@example.com').andPassword('password');
var mu = require('./vendor/Mu/lib/mu');
    mu.templateRoot = './example_templates';

console.log('go to http://localhost:3000/');

app.get('/', function(req, res){
  stream.limit(10, function(err, response) {
    if (err !== null) { throw new Error(err); }
    var buffer = '';
    
    for (var i = 0; i < response.length; i++) { 
      if (response[i].item_type == 'image') { response[i].image = true; }
    }
    
    mu.render('overview', {items: response}, {}, function (err, output) {
      if (err) { throw err; }
      output.addListener('data', function (c) {buffer += c; }).addListener('end', function () { res.end(buffer); });
    });
  }); 
});

app.listen(3000);  

	

