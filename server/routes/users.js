var express = require('express');
var router = express.Router();
var neo4j = require('neo4j');
var secret = require('../../private.js');
var db = new neo4j.GraphDatabase(secret.grapheneDB_URI);

// CREATES NEW USERS
router.post('/register', function(req, res, next){
  // console.log("What is req inside users.js: ", req);
  console.log("What is req.body inside users.js: ", req.body);
  var query = [
    'CREATE (user:User {newUser})',
    'RETURN user'
  ].join('\n');
  var params = {
    newUser: {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      userName: req.body.userName,
      password: req.body.password,
      confirmPassword: req.body.confirmPassword,
      email: req.body.email,
      website: req.body.website,
      companyName: req.body.companyName,
      phoneNumber: req.body.phoneNumber,
      video: req.body.video,
      image: req.body.image,
      active:true
    }
  };
  
  db.cypher({
    query: query,
    params: params
  }, 
    function(err, user){
      if (err) throw err;
    
      console.log('user',user);
      console.log('register calling home');
      // res.status(200).json(user=user);
      res.send({user:user})
      .then(function(){
        res.redirect('/')
      })
  })
  // res.status(200);
});

// LOGIN //
// router.get('/login', function(req, res, next) {
//   // var loggedInUserID = req.cookies.userID;
//   // console.log('get from routes.user')
//   var query = [
//     'MATCH (user:User)',
//     'WHERE user.password = {password} and user.userName = {userName})',
//     'RETURN user'
//   ].join('\n');
//   var params = {
//     password: req.body.password,
//     userName: req.body.userName 

//   };
  
//   db.cypher({
//     query: query,
//     // params: params
//   }, function(err, user){
//     if (err) throw err;
//     res.render('/', {title: 'Home', users: user});  
//     // res.send({title: 'All Users', users: users, one:users.properties.name});  
//     // res.send({title: 'All Users', user: user[user.length-1]});  
//     console.log('user')
//   });
  
// });


//checks for user
// QUERY ALL USERS //
router.get('/all', function(req, res, next) {
  // var loggedInUserID = req.cookies.userID;
  console.log('req.cookies', req)
  var query = [
    'MATCH (users:User)',
    // 'WHERE NOT (ID(users) = {loggedInUserID})',
    'RETURN users'
  ].join('\n');
  // var params = {
  //   loggedInUserID: loggedInUserID
  // };
  
  db.cypher({
    query: query,
    // params: params
  }, function(err, user){
    if (err) throw err;
    console.log('user')
    console.log('labels',user[user.length-1].users.labels)
    // res.render('users/index', {title: 'All Users', users: users});  
    // res.send({title: 'All Users', users: users, one:users.properties.name});  
    res.send({title: 'All Users', user: user});  

  });
  
});

router.get('/profile', function(req, res, next) {
  // var loggedInUserID = req.cookies.userID;
  console.log('req.cookies', req)
  var query = [
    'MATCH (users:User)',
    // 'WHERE NOT (ID(users) = {loggedInUserID})',
    'RETURN users'
  ].join('\n');
  // var params = {
  //   loggedInUserID: loggedInUserID
  // };
  
  db.cypher({
    query: query,
    // params: params
  }, function(err, user){
    if (err) throw err;
    console.log('profile called')
    // console.log('labels',user[user.length-1].users.labels)
    // res.render('users/index', {title: 'All Users', users: users});  
    // res.send({title: 'All Users', users: users, one:users.properties.name});  
    // res.send({title: 'All Users', user: user[user.length-1]});  
    res.send({user: user[user.length-1]});  

  });
  
});


module.exports = router;
