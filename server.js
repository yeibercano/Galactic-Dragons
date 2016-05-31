var express = require('express');
var path = require('path');
var httpProxy = require('http-proxy');
var publicPath = path.resolve(__dirname, 'public');
var fs = require('fs');
var bodyParser = require('body-parser');
var multiparty = require('connect-multiparty'),
  mulitpartyMiddleware = multiparty();
var secret = require('./private.js');
var morgan = require('morgan')
// var favicon = require('serve-favicon');

// We need to add a configuration to our proxy server,
// as we are now proxying outside localhost
var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? process.env.PORT : 3000;

var proxy = httpProxy.createProxyServer({
  changeOrigin: true
});
var app = express();

// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser({limit: '50mb'}));
app.use(express.static(publicPath));

// use morgan to log requests to the console
app.use(morgan('dev'));


// app.use(function(req, res, next){
// console.log('req.headers:', req.headers)
// console.log('req.body:', req.body)
// console.log('req.query:', req.query)
//   next();
// });



/* ROUTES */
var users = require('./server/routes/users');
var movies = require('./server/routes/movies')
app.use('/movies', movies) /* All MOVIES ROUTES. */
app.use('/users', users); /* All USERS ROUTES. */

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

