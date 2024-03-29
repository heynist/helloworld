var nimble = require('nimble');

function eofCallback(err, data) {
    if (err)
        console.error ("error encountered:" + err);
    else
        console.log('eofCallback called: file has ' + data.length + ' characters');
}

var fs=require('fs');

nimble.parallel([
    function(callback) {
        var content = fs.readFileSync('./hello.js','utf-8');
        console.log(content.length);
        callback();
    },
    function(callback) {
        var content = fs.readFileSync('./converter.js','utf-8');
        console.log(content.length);
        callback();
    },
    function(callback) {
        var content = fs.readFileSync('./closure.js','utf-8');
        console.log(content.length);
        callback();
    }], function (callback) {
        console.log('all done');
    }
);
