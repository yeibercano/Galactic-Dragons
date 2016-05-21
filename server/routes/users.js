var express = require('express');
var router = express.Router();
var neo4j = require('neo4j');
var secret = require('../../private.js');
var db = new neo4j.GraphDatabase(secret.grapheneDB_URI);


router.post('/register', function(req, res, next){
  console.log('register called');

  // insert the data
  var query = [
    'CREATE (user:User {newUser})',
    'RETURN user'
  ].join('\n');
  var params = {
    newUser: {
      name: req.body.name,
      username: req.body.username,
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
    
      console.log('user',user);
      console.log('req.params',res);
      // res.redirect('https://slack.com/');
  })
  res.send('created user')
  // res.status(200);
});


router.get('/all', function(req, res, next) {
  // var loggedInUserID = req.cookies.userID;
  // console.log('get from routes.user')
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
    res.send({title: 'All Users', user: user[user.length-1].users.labels});  

  });
  
});



module.exports = router;
