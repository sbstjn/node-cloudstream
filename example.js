var stream = require('./cloudstream').withUser('mail@example.com').andPassword('password');

stream.limit(5, function(err, response) {
    if (err !== null) {
        throw new Error(err);
    }
    
    console.log('found items:');
    console.log(response);
});;
