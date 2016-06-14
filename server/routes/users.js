var express = require('express');
var router = express.Router();
var neo4j = require('neo4j');
var secret = require('../../private.js');
var db = new neo4j.GraphDatabase(secret.grapheneDB_URI);
var newRouter = require('react-router')
var bcrypt = require('bcryptjs')
var jwt    = require('jsonwebtoken')
var crypto = require('crypto');

// CREATES NEW USERS
router.post('/register', function(req, res, next){
  console.log("What is req.body inside users.js: ", req.body);
  var submittedPassword = req.body.password;
  
  //hashes and salts the password
  var hashedPassword = bcrypt.hashSync(submittedPassword, 10);

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
      res.status(200).send({ 
        firstName : user[0].user.properties.firstName,
        lastName: user[0].user.properties.lastName,
        email: user[0].user.properties.email,
        company: user[0].user.properties.companyName,
        website: user[0].user.properties.website,
        video: user[0].user.properties.video,
        image: user[0].user.properties.image,
        password: user[0].user.properties.password,
        userName: user[0].user.properties.userName
    });

    // var token = jwt.sign({
    //   // firstName : user[0].user.properties.firstName,
    //   // lastName: user[0].user.properties.lastName,
    //   // email: user[0].user.properties.email,
    //   // video: user[0].user.properties.video,
    //   // image: user[0].user.properties.image,
    //   // password: user[0].user.properties.password,
    //   id: user[0].user._id,
    //   userName: user[0].user.properties.userName
    // }, secret.jwtSecret, {
    //   expiresIn: 15000
    // });
    // res.status(200).json({
    //   success: true,
    //   userName : user[0].user.properties.userName,
    //   message: 'Enjoy your token!',
    //   token: token
    // });
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

/* POST /users/login */
router.post('/login', function(req, res, next){
  // console.log('req.body;',req.body)
  console.log('in login');
  var username = req.headers.userName || req.query.userName || req.body.userName
  console.log('username:', username)
  //checking passwords
  var submittedPassword = req.headers.password || req.query.password || req.body.password;
  // var hashedPassword = bcrypt.hashSync(submittedPassword, 10);
  // // // var validPassword = bcrypt.compareSync(submittedPassword, hashedPassword);
  // // //   console.log('valid password is:', validPassword);
  // //   console.log('hashed', hashedPassword);
  // //   console.log('submittedPassword', submittedPassword)

  // // var encryptedPassword = crypto.createHmac('sha256', secret.hashed)
  // //                 .update(submittedPassword)
  // //                 .digest('hex');
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
      var databasePass = user[0].user.properties.password;

      // var validPass = bcrypt.compareSync(submittedPassword, databasePass)
      // if(bcrypt.compareSync(submittedPassword, databasePass)){
      //   console.log('pass works')
      //   res.send({
      //     firstName : user[0].user.properties.firstName,
      //     lastName: user[0].user.properties.lastName,
      //     email: user[0].user.properties.email,
      //     video: user[0].user.properties.video,
      //     image: user[0].user.properties.image,
      //     password: user[0].user.properties.password,
      //     userName: user[0].user.properties.userName
      //   })
      // } else {
      //   console.log('pass does not work')
      //   res.status(401).send('wrong password')
      // }

      if(bcrypt.compareSync(submittedPassword, databasePass)){
        console.log('pass works')

        res.send({
          firstName : user[0].user.properties.firstName,
          lastName: user[0].user.properties.lastName,
          email: user[0].user.properties.email,
          company: user[0].user.properties.companyName,
          website: user[0].user.properties.website,
          video: user[0].user.properties.video,
          image: user[0].user.properties.image,
          password: user[0].user.properties.password,
          userName: user[0].user.properties.userName
        })

      } else {
        console.log('pass does not work')
        res.status(401).send('wrong password')
      }
      // return the information including token as JSON
  });
});

/* ANY ROUTE BELOW THIS FUNCTION WILL BE AUTHENTICATED */
// router.use(function(req, res, next) {
//   console.log('req. query in middleware:', req.body)
//   console.log('req. query in middleware:', req.headers)
//   console.log('req. query in middleware:', req.query)
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


/* QUERY SINGLE USER */
router.get('/single', function(req, res, next) {
  var userName = req.query['userName'] || req.headers['userName'] || req.body['userName'] || req.decoded['userName'];
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
