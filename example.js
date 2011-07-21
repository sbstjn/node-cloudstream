var app     = require('express').createServer();
var stream  = require('./cloudstream').withUser('mail@example.com').andPassword('password');
var mu = require('./vendor/Mu/lib/mu');
    mu.templateRoot = './example_templates';

app.get('/', function(req, res){
    stream.limit(5, function(err, response) {
        if (err !== null) {
            throw new Error(err);
        }
        
        for (var i = 0; i < response.length; i++) {
            if (response[i].item_type == 'image') {
                response[i].preview_image = response[i].remote_url;
            }
        }
        
        var ctx = {items: response};
        
        mu.render('overview', ctx, {}, function (err, output) {
          if (err) {
            throw err;
          }
        
          var buffer = '';
          output.addListener('data', function (c) {buffer += c; })
                .addListener('end', function () { res.end(buffer); });
        });
    }); 
});

app.listen(3000);    
    
    

