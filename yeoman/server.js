var express = require('express');
var app = express();


app.use(express.static('app'));
app.use('/bower_components', express.static('bower_components'));