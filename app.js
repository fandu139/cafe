'use strict'

var express = require('express');
var app = express();
var http = require('http');
var routers = require('./routes/index');

/**
 * Configs
 */

app.set('port',process.env.PORT || 3030); // PORT
app.set('views', __dirname); // set folder views
app.set('view engine', 'ejs'); // set enggine tampilan ejs

/**
 * Middlewares
 */

app.use(express.static(__dirname + '/public')); // set folder css dan javascript

/**
 * Routes
 */

app.get('/',function(req,res){   // root awal web 
  res.render(__dirname + '/views/index.ejs');
});

app.get('/welcome',function(req,res){   // root awal web 
  res.render(__dirname + '/views/welcome.ejs');
});

  
/**
 * Error Handlers
 */

app.use(function(req, res) {
  res.send('404: Page not Found', 404);
});

app.use(function(error, req, res, next) {
	res.send(error, 500);
});

http.createServer(app).listen(app.get('port'),function(){
  console.log('Server Anda jalan menggunakan Port : %s ', app.get('port'));
});
