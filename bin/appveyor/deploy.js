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

config.localRoot = 'server/gamemodes';
config.remoteRoot = 'gamemodes';

ftp.deploy(config , function(err) {
    if(err) console.log(err);
    else {
        console.log('Gamemodes deployed...');
        
        config.localRoot = 'server/filterscripts';
        config.remoteRoot = 'filterscripts';

        ftp.deploy(config, function(err) {
            if(err) console.log(err);
            else {
                console.log('Filterscripts deployed...');
                
                config.localRoot = 'server/plugins';
                config.remoteRoot = 'plugins';

                ftp.deploy(config, function(err) {
                    if(err) console.log(err);
                    else console.log('Plugins deployed...');
                });
            }
        });
    }
});

ftp.on('upload-error', function (data) {
    console.log(data.err);
});