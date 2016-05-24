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
      res.status(200).json(user=user);
      // res.redirect('/users/profile');
  })
  // res.status(200);
});

/* LOADS PROFILE */
router.get('/profile/:id', function(req, res, next) {
  console.log('req', req)
  console.log('res',res)
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
    // console.log('user', user)
    res.json({user: user[user.length-1]});
    // res.redirect('/') 

  });
  
});


// QUERY ALL USERS //
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

/* QUERY ALL USERS */
router.get('/all', function(req, res, next) {
  var query = [
    'MATCH (users:User)',
    'RETURN users'
  ].join('\n');

  db.cypher({
    query: query,
  }, function(err, user){
    if (err) throw err;
    // res.send({title: 'All Users', users: user});  
    // res.redirect('/')
  // newRouter.browserHistory.push('/');
  newRouter.transitionTo('/')
  

  });
  
});


/* GET /users/login */
router.get('/login', function(req, res, next){
  
  // res.redirect('/users/login');
  // res.status(200).send({redirect: '/'})
  // // next();

  // newRouter.transitionTo('/')
});

/* POST /users/login */
router.post('/login', function(req, res, next){
  // console.log('Login post')
  console.log('req.body', req.body.userName)
  var userName = req.body['userName'];
  var password = req.body['password'];
  
  // // check if data is empty
  // if (!email || !password){
  //   // add a message
  //   return res.redirect('/users/login');
  // }
  
  var query = [
    'MATCH (user:User { userName: {userName} })',
    'RETURN user'
  ].join('\n');
  var params = {
    userName: userName
  }

  db.cypher({
    query: query,
    params: params
  }, 
    function(err, user){
      if (err) throw err;
    
      // console.log(user[0]['user']['properties']);
      // if the user exists check if is active
      console.log('user',user);
      
      // login the user
      // var userID = user[0]['user']['_id'];
      // var currentUser = user[0]['user']['properties'];
      // res.cookie('userID', userID, {
      //   domain: 'begin-imitate.codio.io',
      //   maxAge: new Date(Date.now() + 9000)

      // });
      // res.cookie('user', currentUser, {
      //   domain: 'begin-imitate.codio.io',
      //   maxAge: new Date(Date.now() + 9000)
      // });
      res.json(user=user)
     // res.send({redirect:'/'})
     // res.redirect('/')
     // newRouter.transitionTo('/')
  });
 
});

module.exports = router;
