var express = require('express');
var router = express.Router();
var neo4j = require('neo4j');
var secret = require('../../private.js');
var db = new neo4j.GraphDatabase(secret.grapheneDB_URI);
var fs = require('fs');
var multiparty = require('connect-multiparty'),
  mulitpartyMiddleware = multiparty();
var jwt    = require('jsonwebtoken')

/* FREE ACCESS ROUTES */

/* LOADS 5 movies */
router.get('/', function(req, res, next) {
  // console.log('req in all movies', req)
  var query = [
   // 'MATCH (m:Movie) RETURN m LIMIT 5'
   'MATCH (m:Movie) RETURN m'
  ].join('\n');

  db.cypher({
    query: query
  },
    function(err, movies){
      if (err) throw err;
      // console.log('movie from all movies',movies);
      //console.log('movies properties access:', movies[0].m.properties.video)
      //console.log('movies _id access of 1st element in array:', movies[0].m._id)
      // res.status(200).json(movies = movies); //another way to send 
      res.status(200).send(movies);
  });
});

/* LOADS ALL MOVIES */
router.get('/profile', function(req, res, next) {
  // console.log('req in all movies', req)
  var query = [
   'MATCH (m:Movie) RETURN m'
  ].join('\n');

  db.cypher({
    query: query
  },
    function(err, movies){
      if (err) throw err;
      // console.log('movie from all movies',movies);
      //console.log('movies properties access:', movies[0].m.properties.video)
      //console.log('movies _id access of 1st element in array:', movies[0].m._id)
      // res.status(200).json(movies = movies); //another way to send 
      res.status(200).send(movies);
  });
});

/* CREATES NEW MOVIE NODE IN NEO4J */
router.post('/movie', function(req, res, next){
  // console.log("What is req inside users.js: ", req.body.userName);
  var userName = req.body.userName
  var query = [
    'MATCH(user:User {userName:{userName}})',
    'CREATE (m:Movie {newMovie})<-[r:OWNER]-(user)',
    'RETURN m'
  ].join('\n');
  var params = {
    newMovie: req.body,
    userName: userName
  };

  db.cypher({
    query: query,
    params: params
  }, 
  function(err, movie){
    if (err) throw err;
    // console.log('movie creates new movie',movie);
    // console.log('new');
    res.status(200).json(movie = movie);
  })
});

/* UPDATE RATING, VIEWING, AVERAGE, VOTERS  VIEWING */
router.post('/rating', function(req, res, next){
  console.log("What is req.body: ", req.body);
 
  var title = req.body.title;
  var rating = req.body.rating;
  var voters = req.body.voter;

  var query = [
    'MATCH(m:Movie {title:{title}})',
    // 'SET m.rating : m.rating + {rating})',
    'SET m.rating = m.rating + {rating}',
    'SET m.voters = m.voters + {voters}',
    'SET m.plays = m.plays + 1',
    'SET m.clicks = m.clicks + 1',
    'SET m.avg = m.plays / m.rating',
    'RETURN m'
  ].join('\n');
  var params = {
    // userName: userName,
    title: title,
    rating: rating,
    voters: voters
  };

  db.cypher({
    query: query,
    params: params
  }, 
  function(err, movie){
    if (err) throw err;
    // console.log('movie creates new movie',movie);
    // console.log('new');
    res.status(200).json(movie = movie);
  })
});

/* TODO: search through all nodes - right now it only search through categories */
/* FOR SEACH BAR - SEARCH MOVIES IN DATABASE */
router.get('/search', function(req, res, next) {
  console.log('search call')
  console.log('req.query from search:', req.query )
  console.log('req.body from search:', req.body )
  console.log('req.headers from search:', req.headers )
  var searchTarget = req.headers.target || req.query.target|| req.body.searchTarget
  // var searchTarget = req.query.target;
  var query = [
   'MATCH (m:Movie {title: {searchTarget}}) RETURN m'
  ].join('\n');
  var params = {
    searchTarget: searchTarget
  };
  db.cypher({
    query: query,
    params: params
  }, 
    function(err, movies){
      if (err) throw err;
      console.log('movie',movies);
      // console.log('new');
      res.status(200).send(movies);
  });
});



// ==============================================================================

router.get('/categories', function(req, res, next) {
  console.log('search call')
  console.log('req.query from search:', req.query )
  console.log('req.body from search:', req.body )
  console.log('req.headers from search:', req.headers )
  var searchTarget = req.headers.target || req.query.target|| req.body.searchTarget
  // var searchTarget = req.query.target;
  var query = [
   'MATCH (m:Movie {category: {searchTarget}}) RETURN m'
  ].join('\n');
  var params = {
    searchTarget: searchTarget
  };
  db.cypher({
    query: query,
    params: params
  }, 
    function(err, movies){
      if (err) throw err;
      console.log('movie',movies);
      // console.log('new');
      res.status(200).send(movies);
  });
});


// s3 connection
var S3FS = require('s3fs');
var s3fsImplementation = new S3FS('galactic.video',{
  accessKeyId: secret.accessKey, 
  secretAccessKey: secret.secretAccessKey,
  endpoint : secret.endpointLocation
});

// s3fsImplementation.create();
router.use(mulitpartyMiddleware);

/* CREATES A NEW MOVIE INTO S3 */
router.post('/movieS3', function(req, res){
  var file = req.files.file;
  var image = req.files.image
  console.log("||||||||||||||||This is req.files from s3 post||||||||||||||||: ", req.files.image);
  console.log('++++++++++++++++this is file which is file.path:', file.path);
  var stream = fs.createReadStream(file.path);
  var imageStream = fs.createReadStream(image.path);
  return s3fsImplementation.writeFile(file.originalFilename, stream)
  .then(function(err){
   return fs.unlink(file.path, function(err){
      if(err){
        console.error("This is the error", err);
      }
      console.log('file upload success');
    })
  })
  .then(function(){
    console.log("~~~~~!!!!!!!!!Made it into promise to writeFile image!!!!!!!~~~~~~")
    return s3fsImplementation.writeFile(image.originalFilename, imageStream)
  })
  .then(function(err){
    fs.unlink(image.path, function(err){
      if(err){
        console.error("This is the error", err);
      }
      console.log('image upload success');
    })
    res.status(200).send('File Upload Complete');
  })
});

/* RETRIEVES ALL MOVIES FROM A USER */
router.get('/user', function(req, res, next) {
  console.log('req.body.userName :', req.body.userName)
  console.log('movies user:', req.decoded)
  var userName = req.query['userName'] || req.headers['userName'] || req.body['userName'] || req.decoded['userName'];

  var query = [
   'MATCH (u:User {userName:{userName}})-[r:OWNER]->(m:Movie) RETURN m'
  ].join('\n');
  var params = {
    userName: userName
  };

  db.cypher({
    query: query,
    params: params
  }, 
    function(err, movies){
      if (err) throw err;
      // console.log('movie',movies);
      // console.log('new');
      res.status(200).send(movies);
  })

});


// /* ANY ROUTE BELOW THIS FUNCTION WILL BE AUTHENTICATED */
// router.use(function(req, res, next) {
//   console.log('req.query in mdidleware movies: ', req.body)
//   // check header or url parameters or post parameters for token
//   var token = req.body.token || req.query.token || req.headers['x-access-token'];
//   // decode token
//   if (token) {
//     // verifies secret and checks exp
//     jwt.verify(token, secret.jwtSecret, function(err, decoded) {      
//       if (err) {
//         return res.json({ success: false, message: 'Failed to authenticate token.' });    
//       } else {
//         // if everything is good, save to request for use in other routes
//         req.decoded = decoded;
//         next();
//       }
//     });
//   } else {
//     // if there is no token
//     // return an error
//     return res.status(403).send({
//         success: false,
//         message: 'No token provided.'
//     });
//   }
// });




//===============================================================================
// router.post('/movieS3', function(req, res){
//   var file = req.files.file;
//   var image = req.files.image

//   console.log("||||||||||||||||This is req.files from s3 post||||||||||||||||: ", req.files.image);
//   console.log('++++++++++++++++this is file which is file.path:', file.path);
//   var stream = fs.createReadStream(file.path);
//   var imageStream = fs.createReadStream(image.path);
//   return s3fsImplementation.writeFile(file.originalFilename, stream)
//   .then(function(err){
//    return fs.unlink(file.path, function(err){
//       if(err){
//         console.error("This is the error", err);
//       }
//       console.log('file upload success');
//     })
//   })
//   .then(function(){
//     console.log("~~~~~!!!!!!!!!Made it into promise to writeFile image!!!!!!!~~~~~~")
//     return s3fsImplementation.writeFile(image.originalFilename, imageStream)
//   })
//   .then(function(err){
//     console.log("made it into after image upload")
//     fs.unlink(image.path, function(err){
//       if(err){
//         console.error("This is the error", err);
//       }
//       console.log('image upload success');
//     })
//   })
//     res.send('File Upload Complete');

// });

/* CREATES NEW MOVIE NODE IN NEO4J */
router.post('/movie', function(req, res, next){
  // console.log("What is req inside users.js: ", req.body.userName);
  var userName = req.body.userName
  var query = [
    'MATCH(user:User {userName:{userName}})',
    'CREATE (m:Movie {newMovie})<-[r:OWNER]-(user)',
    'RETURN m'
  ].join('\n');
  var params = {
    newMovie: req.body,
    userName: userName
  };

  db.cypher({
    query: query,
    params: params
  }, 
  function(err, movie){
    if (err) throw err;
    // console.log('movie creates new movie',movie);
    // console.log('new');
    res.status(200).json(movie = movie);
  })
});



/* RETRIEVES A SINGLE MOVIE */
router.get('/single', function(req, res, next) {
  var title = req.headers.title || req.query.title || req.body.title
  console.log('title:', title )
  var query = [
   'MATCH (m:Movie {title:{title}}) RETURN m'
  ].join('\n');
  var params = {
    title: title
  };
  db.cypher({
    query: query,
    params: params
  }, 
  function(err, movie){
    if (err) throw err;
    console.log('movie',movie);
    // console.log('new');
    res.status(200).send(movie);
  });
});



// makes the file available to the app
module.exports = router;