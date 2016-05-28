var express = require('express');
var router = express.Router();
var neo4j = require('neo4j');
var secret = require('../../private.js');
var db = new neo4j.GraphDatabase(secret.grapheneDB_URI);
var newRouter = require('react-router')
var bcrypt = require('bcryptjs')

var crypto = require('crypto');


// CREATES NEW USERS
router.post('/register', function(req, res, next){
  // console.log("What is req inside users.js: ", req);
  // console.log("What is req.body inside users.js: ", req.body);
  var submittedPassword = req.body.password;
  
  //hashes and salts the password
  var hashedPassword = bcrypt.hashSync(submittedPassword, 10);
  console.log('hashed password', hashedPassword)

  // encrypt the password
  // var encryptedPassword = crypto.createHmac('sha256', secret.hashed)
  //                 .update(submittedPassword)
  //                 .digest('hex');

  var query = [
    'CREATE (user:User {newUser})',
    'RETURN user'
  ].join('\n');
  var params = {
    newUser: {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      userName: req.body.userName,
      password: hashedPassword,
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
    
      console.log('user.data',user[0].user);
      // console.log('register calling home');
      res.status(200).send({ 
        firstName : user[0].user.properties.firstName,
        lastName: user[0].user.properties.lastName,
        email: user[0].user.properties.email,
        video: user[0].user.properties.video,
        image: user[0].user.properties.image,
        password: user[0].user.properties.password,
        userName: user[0].user.properties.userName
      });
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
    // console.log(users)
    res.send({users: users});  
  });
});

// var faker = require('faker');
// router.get('/faker', function(req, res){
//   var user = faker.helpers.userCard();
//   user.avatar = faker.image.avatar;
//   console.log('user', user)
//   res.send(user)
// })
// ROUTES WE STILL NEED TO WORK ON BELOW

/* GET /users/login */
// router.get('/login', function(req, res, next){
//   return res.redirect('/users/login')
//   next();
  
// });


// var authenticate = require('../utils');
/* POST /users/login */
router.post('/login', function(req, res, next){
  // console.log('req.body;',req.body)
  console.log('in login');
  var username = req.headers.userName || req.query.userName || req.body.userName
  console.log('username:', username)
  //checking passwords
  var submittedPassword = req.headers.password || req.query.password || req.body.password;
  var hashedPassword = bcrypt.hashSync(submittedPassword, 10);
  // // var validPassword = bcrypt.compareSync(submittedPassword, hashedPassword);
  // //   console.log('valid password is:', validPassword);
  //   console.log('hashed', hashedPassword);
  //   console.log('submittedPassword', submittedPassword)

  // var encryptedPassword = crypto.createHmac('sha256', secret.hashed)
  //                 .update(submittedPassword)
  //                 .digest('hex');
  var query = [
    'MATCH (user:User {  userName:{username} })',
    'RETURN user'
  ].join('\n');
  var params = {
    username: username
  }
  db.cypher({
    query: query,
    params: params
  }, 
    function(err, user){
      if (err) throw err;

      // if(user[0].user.properties.password === encryptedPassword){
      //   console.log('pass matches')
      // }
      console.log('user', user[0].user.properties);
      console.log('user login:', user)
      var databasePass = user[0].user.properties.password;

      // var validPass = bcrypt.compareSync(submittedPassword, databasePass)
      if(bcrypt.compareSync(submittedPassword, databasePass)){
        console.log('pass works')
        res.send({
          firstName : user[0].user.properties.firstName,
          lastName: user[0].user.properties.lastName,
          email: user[0].user.properties.email,
          video: user[0].user.properties.video,
          image: user[0].user.properties.image,
          password: user[0].user.properties.password,
          userName: user[0].user.properties.userName
        })
      } else {
        console.log('pass does not work')
        res.status(401).send('wrong password')
      }
      // bcrypt.compare(submittedPassword, databasePass, function(err, res) {
      //   if(err) throw err
      //     if (databasePass !== submittedPassword) {
      //       console.log('wrong pass')
      //       throw err
      //     } else if (databasePass !== submittedPassword) {
      //       console.log('here')
      //     }
      // });
      // res.json(user[0].user.properties.password)
      
  });
});

/* QUERY SINGLE USER */
router.get('/single', function(req, res, next) {

  // console.log('this is req.query.userName:', req.query.userName);

  var userName = req.query['userName'] || req.headers['userName'] || req.body['userName'];
  console.log('This is userName', userName);
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
  }, function(err, user){
    if (err) throw err;
    console.log("What is user in db.cypher: ", user);
    console.log("WORK!!!!!!!!", user[0].user.properties.userName)
    res.send(user);  
  });
});



module.exports = router;
