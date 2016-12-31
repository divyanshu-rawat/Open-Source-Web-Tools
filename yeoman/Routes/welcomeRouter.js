
var
  express = require('express'),
  bodyParser = require('body-parser');

var router = express.Router();

var welcomeRouter = express.Router();

welcomeRouter.use(bodyParser.json());

welcomeRouter.route('/')

/* GET home page. */
.get(function(req, res, next) {
  
  // res.render('index', { title: 'Express' });

  	res.send('Welcome to Module 2 Homework!');
  

});

module.exports = welcomeRouter;
