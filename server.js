'use strict';

// server.js
var express = require("express"),
    app = express(),
    path = require('path');

app.use(express.json());
app.use(express.urlencoded());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
app.use('/bower_components', express.static(path.join(__dirname, 'bower_components')));
app.set('view engine', 'html');
// load models
var models = require('./app/models')(app);

//loading routs
var routes = require('./app/routes')(app);

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});