var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// PORT------------------------------------------
var port = process.env.PORT || 8000;

app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
// app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname));

// routes ==================================================

// require('./app/routes')(app); // configure our routes
// app.use(express.static(__dirname + '/public'));

// start app ===============================================
// startup our app at http://localhost:8000
app.listen(port);

// shoutout to the user
console.log('Listening in on port ' + port);

// expose app
exports = module.exports = app;