
var mongoose       = require('mongoose');
var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');

var db = require('./config/db');

var port = process.env.PORT || 8080; 

mongoose.connect(db.url); 

// Parse the data/stuff of the body (POST) parameters:
app.use(bodyParser.json()); 

// Parse application/vnd.api+json as json:
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 

// Parse application/x-www-form-urlencoded:
app.use(bodyParser.urlencoded({ extended: true })); 

// Override with the X-HTTP-Method-Override header in the request--simulate DELETE/PUT:
app.use(methodOverride('X-HTTP-Method-Override')); 

// Set the static files location /public/img will be /img for users:
app.use(express.static(__dirname + '/public')); 

// Routes:
require('./app/routes')(app);

// http://localhost:8080:
app.listen(port);               

console.log('Magic happens on port ' + port);

exports = module.exports = app;                         
