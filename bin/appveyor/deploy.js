/**
 * Created by Piranha on 31.10.2014.
 */
var Client = require('ftp');
var fs = require('fs');
var path = require('path');

var ftp = new Client();

ftp.on('ready', DeployFiles);
ftp.on('error', Error);

ftp.connect({
    host: process.env.samp_ftp_server,
    user: process.env.samp_ftp_user,
    password: process.env.samp_ftp_password
});

function DeployFiles() {
    IterateFiles('..\\server', function(file) {
        ftp.put(file, path.resolve(file, '..'), function(err) {
            if(err) throw err;
        });
    });
}

function Error(err) {
    if(err) throw err;

    ftp.end();
    process.exit(1);
}

function IterateFiles(dir, cb) {
    fs.readdir(dir, function (err, files) {
        if (err) throw err;

        files.forEach(function (file) {
            file = path.resolve(dir, file);
            fs.stat(dir, function(stats) {
                if(stats.isDirectory()) {
                    return iterateFiles(dir, cb);
                } else if(stats.isFile()) {
                    cb(file);
                }
            });
        });
    });
}

process.on('exit', function(code) {
    // make sure FTP connection gets closed
    ftp.end();
});