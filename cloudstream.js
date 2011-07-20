var util = require('util');
var exec = require('child_process').exec;

exports.withUser = function (username) {
    csUser = username;

    return this;
}

exports.andPassword = function(password) {
    csPass = password;
    
    return this;
}

exports.limit = function(limit, callback) {

    var cmd = 'curl --digest -u ' + csUser + ':' + csPass + ' -H "Accept: application/json"';
        cmd = cmd + ' "http://my.cl.ly/items?page=1&per_page=' + limit + '"';
    
    child = exec(cmd, function(error, stdout, stderr) {
        if (error !== null) {
            console.log('exec error: ' + error);
        }

        var resp = []
          , error = null;
        
        if (stdout.substr(0, 1) == '[') { 
            resp = JSON.parse(stdout);
        } else {
            error = stdout;
        }
 
        callback(error, resp);
    });
}
