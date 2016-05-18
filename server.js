var express = require('express');
var path = require('path');
var httpProxy = require('http-proxy');
var publicPath = path.resolve(__dirname, 'public');
var fs = require('fs');
var bodyParser = require('body-parser');
var multiparty = require('connect-multiparty'),
  mulitpartyMiddleware = multiparty();

var secret = require('./private.js');

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


var S3FS = require('s3fs');
var s3fsImplementation = new S3FS('galactic.video',{
  accessKeyId: secret.accessKey, 
  secretAccessKey: secret.secretAccessKey,
  endpoint : secret.endpointLocation
});

// s3fsImplementation.create();
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
app.use(mulitpartyMiddleware);
app.post('/api/testupload', function(req, res){
  console.log("+++++++++~~~~~~~This is what is in req.body:", req.body)
  var file = req.files.file;
  var stream = fs.createReadStream(file.path);
  console.log(file.path);
  return s3fsImplementation.writeFile(file.originalFilename, stream)
  .then(function(){
    fs.unlink(file.path, function(err){
      if(err){
        console.error("This is the error", err);
      }
    })
    res.send("done");
  });

});




// If you only want this for development, you would of course
// put it in the "if" block below

if (isProduction) {
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

