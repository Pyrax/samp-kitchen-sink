/**
 * Created by Piranha on 31.10.2014.
 */
var Client = require('ftp-client');
var fs = require('fs');
var path = require('path');

var config = {
    host: process.env.samp_ftp_server,
    port: 21,
    user: process.env.samp_ftp_user,
    password: process.env.samp_ftp_password
};

var ftp = new Client(config, {
    overwrite: 'all'
});

config.localRoot = '../server/gamemodes';
config.remoteRoot = 'gamemodes';

ftp.connect(function() {
    /*ftp.deploy(config , function(err) {
        if(err) console.log(err);
        else {
            console.log('Gamemodes deployed...');
            
            config.localRoot = '../server/filterscripts';
            config.remoteRoot = 'filterscripts';

            ftp.deploy(config, function(err) {
                if(err) console.log(err);
                else {
                    console.log('Filterscripts deployed...');
                    
                    config.localRoot = '../server/plugins';
                    config.remoteRoot = 'plugins';

                    ftp.deploy(config, function(err) {
                        if(err) console.log(err);
                        else console.log('Plugins deployed...');
                    });
                }
            });
        }
    });*/
    
    ftp.upload(['../server/gamemodes/**'], '/gamemodes', {}, function(result) {
        console.log('Gamemodes deployed... (' + JSON.stringify(result) + ')');
    });
});

/*ftp.on('upload-error', function (data) {
    console.log(data.err);
});*/