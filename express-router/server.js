// server.js

// BASE SETUP
// ==============================================

var express = require('express');
var app     = express();
var port    =   process.env.PORT || 8080;

// ROUTES in Express 3.0

// We've created a route using the normal app.get that we've used in our Express 3.0 application
app.get('/sample', function(req, res) {
    res.send('this is a sample!');  
});

// ROUTES in Express 4.0
// get an instance of router using Express 4.0
var router = express.Router();

router.get('/', function(req, res) {
    res.send('im the home page!');  
});

router.get('/about', function(req, res) {
    res.send('im the about page!'); 
});

// apply the routes to our application
app.use('/', router);


// START THE SERVER
// ==============================================
app.listen(port);
console.log('Magic happens on port ' + port);