/**
 * Created by Piranha on 02.11.2014.
 */
var Client = require('ftp-deploy');
var fs = require('fs');
var path = require('path');

var ftp = new Client();

var config = {
    host: process.env.web_ftp_server,
    port: 21,
    username: process.env.web_ftp_user,
    password: process.env.web_ftp_password,
    continueOnError: true
};

config.localRoot = '../../tools/scanner/web';
config.remoteRoot = 'public_html';

ftp.deploy(config , function(err) {
    if(err) console.log(err);
    else console.log('Webfiles deployed...');
});

ftp.on('upload-error', function (data) {
    console.log(data.err);
});