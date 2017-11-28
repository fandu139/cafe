'use strict'

var express = require('express');
var app = module.exports = express();
var http = require('http');
var routers = require('./routes/index');

app.set('port',process.env.PORT || 3030); // PORT
app.set('views', __dirname); // set folder views
app.use(express.static(__dirname + '/public')); // set folder css dan javascript
app.set('view engine', 'ejs'); // set enggine tampilan ejs

app.get('/',function(req,res){   // root awal web 
    res.render(__dirname + '/views/index.ejs');
});

/*app.use(function(req,res,fn){ // halaman tidak di temukan
  res.render('error_page', {status:404,url:req.url,error: 'Maaf Halaman Tidak Di Temukan'});
});*/


/*var welcome = require('./javascript/welcome');

app.use(welcome);*/

app.get('/welcome',function(req,res){   // root awal web 
    res.render(__dirname + '/views/welcome.ejs');
});

// Handle 404
app.use(function(req, res) {
    res.send('404: Page not Found', 404);
});
  
// Handle 500
app.use(function(error, req, res, next) {
	res.send('500: Internal Server Error', 500);
});

/*app.use(function(err, req, res, next){ //error page
  res.render('error_page', {
    status: err.status || 500,
    error: err
  });
});*/

// Jalankan Server
http.createServer(app).listen(app.get('port'),function(){
    console.log('Server anda jalan menggunakan Port : %s ', app.get('port'));
});