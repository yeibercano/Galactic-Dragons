var express = require('express');
var path = require('path');
var httpProxy = require('http-proxy');
var publicPath = path.resolve(__dirname, 'public');
var streamingS3 = require('streaming-s3');
var fs = require('fs');
var secret = require('private.js');

// We need to add a configuration to our proxy server,
// as we are now proxying outside localhost
var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? process.env.PORT : 3000;

var proxy = httpProxy.createProxyServer({
  changeOrigin: true
});
var app = express();

app.use(express.static(publicPath));

//Below code is for uploading file to S3 bucket in AWS using streaming-s3
//'/video.mp4' should be replaced with variable that siginifies the mp4 being uploaded
var fStream = fs.CreateReadStream(__dirname + '/video.mp4');
var uploader = new streamingS3(fStream, {accessKeyId: 'accessKey', secretAccessKey: 'secretKey'},
  {
    Bucket: 'galactic.video',
    Key: 'video.mp4',
    ContentType: 'video/mp4'
  }, function(err, resp, stats){
    if(err) console.log("Upload error: ", e);
    console.log("Upload stats: ", stats);
    console.log("Upload successful", resp);
  }
);


// If you only want this for development, you would of course
// put it in the "if" block below

if (!isProduction) {
  var bundle = require('./server/compiler.js')
  bundle()
  app.all('/build/*', function (req, res) {
    proxy.web(req, res, {
        target: 'http://localhost:8080'
    })
  })
};

proxy.on('error', function(e) {
  console.log('Could not connect to proxy, please try again...')
});

app.listen(port, function () {
  console.log('Server running on port ' + port)
});

