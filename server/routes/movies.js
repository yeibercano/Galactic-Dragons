var express = require('express');
var router = express.Router();
var neo4j = require('neo4j');
var secret = require('../../private.js');
var db = new neo4j.GraphDatabase(secret.grapheneDB_URI);
var fs = require('fs');
var multiparty = require('connect-multiparty'),
  mulitpartyMiddleware = multiparty();


// s3 connection
var S3FS = require('s3fs');
var s3fsImplementation = new S3FS('galactic.video',{
  accessKeyId: secret.accessKey, 
  secretAccessKey: secret.secretAccessKey,
  endpoint : secret.endpointLocation
});

// s3fsImplementation.create();
router.use(mulitpartyMiddleware);

//creates a new movie node
router.post('/movie', function(req, res){
    // res.send('yes')
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

/* LOADS ALL MOVIES */
router.get('/', function(req, res, next) {
  res.redirect('/register')
  
});

// makes the file available to the app
module.exports = router;