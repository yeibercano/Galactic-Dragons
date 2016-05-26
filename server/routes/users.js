var express = require('express');
var router = express.Router();
var neo4j = require('neo4j');
var secret = require('../../private.js');
var db = new neo4j.GraphDatabase(secret.grapheneDB_URI);
var newRouter = require('react-router')


// CREATES NEW USERS
router.post('/register', function(req, res, next){
  // console.log("What is req inside users.js: ", req);
  console.log("What is req.body inside users.js: ", req.body);
  var query = [
    'CREATE (user:User {newUser})',
    'RETURN user'
  ].join('\n');
  var params = {
    newUser: req.body
  };
  
  db.cypher({
    query: query,
    params: params
  }, 
    function(err, user){
      if (err) throw err;
    
      console.log('user',user);
      console.log('register calling home');
      res.status(200).json(user=user);
      // res.redirect('/users/profile');
  })
  // res.status(200);
});

/* QUERY ALL USERS */
router.get('/all', function(req, res, next) {
  var query = [
    'MATCH (n:User )',
    'RETURN n'
  ].join('\n');

  db.cypher({
    query: query
  }, function(err, users){
    if (err) throw err;
    console.log(users)
    res.send({users: users});  
  });
});

// ROUTES WE STILL NEED TO WORK ON BELOW

/* GET /users/login */
// router.get('/login', function(req, res, next){
  
//   next();
  
// });

/* POST /users/login */
// router.post('/login', function(req, res, next){
//   // console.log('Login post')
//   console.log('req.body', req.body.userName)
//   var userName = req.body['userName'];
//   var password = req.body['password'];
  
//   // check if data is empty
//   if (!userName || !password){
//     // add a message
//     return res.redirect('/users/login');
//   }
  
//   var query = [
//     'MATCH (user:User { userName: {userName}, password:{password} })',
//     'RETURN user'
//   ].join('\n');
//   var params = {
//     userName: userName,
//     password: password
//   }

//   db.cypher({
//     query: query,
//     params: params
//   }, 
//     function(err, user){
//       if (err) throw err;
//       console.log('user',user);
//       res.json(user=user)
//   });
 
// });

/* QUERY SINGLE USER */
// router.get('/single', function(req, res, next) {

//   // console.log('this is req.query.userName:', req.query.userName);

//   var userName = req.query['userName'];
//   console.log('This is userName', userName);
//   var query = [
//     'MATCH (users:User { userName: {userName} })',
//     'RETURN users'
//   ].join('\n');
//   var params = {
//     userName: userName
//   }

//   db.cypher({
//     query: query,
//     params: params
//   }, function(err, user){
//     if (err) throw err;
//     console.log("What is user in db.cypher: ", user);
//     console.log("WORK!!!!!!!!", user[0].users.properties.userName)
//     res.send({users: user[0].users.properties.userName});  
//   });
// });

module.exports = router;
