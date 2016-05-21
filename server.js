var express = require('express');
var path = require('path');
var httpProxy = require('http-proxy');
var publicPath = path.resolve(__dirname, 'public');
var fs = require('fs');
var bodyParser = require('body-parser');
var multiparty = require('connect-multiparty'),
  mulitpartyMiddleware = multiparty();
var secret = require('./private.js');
var routes = require('./server/routes/users.js');
// var nodeNeo4j = require('node-neo4j');
var neo4j = require("neo4j");
var axios = require('axios');

/*
====================================================================================
NEO 4J SETUP BELOW
====================================================================================
*/
var db = new neo4j.GraphDatabase(secret.grapheneDB_URI);

// We need to add a configuration to our proxy server,
// as we are now proxying outside localhost
var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? process.env.PORT : 3000;

var proxy = httpProxy.createProxyServer({
  changeOrigin: true
});
var app = express();

app.use(bodyParser.json());
app.use(bodyParser({limit: '50mb'}));
app.use(express.static(publicPath));

//routes
// app.post('/register', routes.create)

app.post('/register', function(req, res, next){
  console.log('register called')
  var username = req.body.username;
  var name = req.body.name;
  var lastName = req.body.lastName;
  var born = req.body.born;
  var age = req.body.age;

  // insert the data
  var query = [
    'CREATE (user:User {newUser})',
    'RETURN user'
  ].join('\n');
  var params = {
    newUser: {
      username: req.body.username,
      name: req.body.name,
      lastName:req.body.lastName,
      born: req.body.born,
      age: req.body.age,
      active:true
    }
  };
  
  db.cypher({
    query: query,
    params: params
  }, 
    function(err, user){
      if (err) throw err;
    
      console.log(user);
      // res.redirect('/users/login');
  });
  res.send('sending after 200')
  // res.status(200);
});
/*
================================================================================================
POST TO S3 BELOW
================================================================================================
*/
app.post('/test', function(req, res) {
  console.log('hi');
  console.log('this is req:', req);
  console.log('this is req.body:', req.body);
  // console.log(req.body);
})

//Below code is for uploading file to S3 bucket in AWS using streaming-s3
//'/video.mp4' should be replaced with variable that siginifies the mp4 being uploaded

var S3FS = require('s3fs');
var s3fsImplementation = new S3FS('galactic.video',{
  accessKeyId: secret.accessKey, 
  secretAccessKey: secret.secretAccessKey,
  endpoint : secret.endpointLocation
});

// s3fsImplementation.create();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(mulitpartyMiddleware);

app.post('/api/testupload', function(req, res){
  var file = req.files.file;
  console.log('this is file which is file:', file);
  var stream = fs.createReadStream(file.path);
  return s3fsImplementation.writeFile(file.originalFilename, stream)
  .then(function(err){
    fs.unlink(file.path, function(err){
      if(err){
        console.error("This is the error", err);
      }
      console.log('file upload success');
    // console.log('this is res:', res);
    })
    res.send('File Upload Complete');
  });

});

/*
================================================================================================
EXPRESS SERVER WITH WEBPACK BELOW
================================================================================================
*/
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

