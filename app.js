'use strict'

var express = require('express');
var app = express();
var http = require('http');
var router = require('./routes/index');

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

app.use(router);
  
/**
 * Error Handlers
 */

app.use(function(req, res) {
  res.status(404).send('404: Page not Found');
});


http.createServer(app).listen(app.get('port'),function(){
  console.log('Server Anda jalan menggunakan Port : %s ', app.get('port'));
});
