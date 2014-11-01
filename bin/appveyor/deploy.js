/**
 * Created by Piranha on 31.10.2014.
 */
var Client = require('ftp-deploy');
var fs = require('fs');
var path = require('path');

var ftp = new Client();

var config = {
    host: process.env.samp_ftp_server,
    port: 21,
    username: process.env.samp_ftp_user,
    password: process.env.samp_ftp_password,
    continueOnError: true
};

config.localRoot = '../server/gamemodes';
config.remoteRoot = 'gamemodes';

ftp.deploy(config , function(err) {
    if(err) throw err;
    else console.log('Gamemodes deployed...');
});

config.localRoot = '../server/filterscripts';
config.remoteRoot = 'filterscripts';

ftp.deploy(config, function(err) {
    if(err) throw err;
    else console.log('Filterscripts deployed...');
});

config.localRoot = '../server/plugins';
config.remoteRoot = 'plugins';

ftp.deploy(config, function(err) {
    if(err) throw err;
    else console.log('Plugins deployed...');
});

ftp.on('upload-error', function (data) {
    console.log(data.err);
});

/*var ftp = new Client();

ftp.on('ready', DeployFiles);
ftp.on('error', Error);

ftp.connect({
    host: process.env.samp_ftp_server,
    user: process.env.samp_ftp_user,
    password: process.env.samp_ftp_password
});

function DeployFiles() {
    IterateFiles('..\\server', function(file) {
        console.log('Trying to upload ' + file + '\nto ' + path.resolve(file, '..'));
        ftp.put(file, path.resolve(file, '..'), function(err) {
            if(err) throw err;
        });
    });
    
    var uploadQueue = IterateFiles('..\\server');
    var itemsUploaded;
    
    uploadQueue.forEach(function(file)) {
        console.log('Trying to upload ' + file + '\nto ' + path.resolve(file, '..'));
        ftp.put(file, path.resolve(file, '..'), function(err) {
            if(err) throw err;
        });
    }
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
            fs.stat(dir, function(err, stats) {
                if(err) throw err;
                
                if(stats.isDirectory()) {
                    return IterateFiles(dir, cb);
                } else if(stats.isFile()) {
                    cb(file);
                }
            });
        });
    });
}

function IterateFiles(dir) {
    var output = [];
    
    var files = fs.readdirSync(dir);
    files.forEach(function(file) {
        file = path.resolve(dir, file);
        var stats = fs.statSync(dir);
        
        if(stats.isDirectory()) {
            IterateFiles(dir);
        } else if(stats.isFile()) {
            output.push(file);
        }
    });
    
    return output;
}*/