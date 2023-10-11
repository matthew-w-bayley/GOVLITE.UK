var express = require('express');
var path = require('path');
var https = require('https');
var http = require('http');
var fs = require('fs');

// This line is from the Node.js HTTPS documentation.
var options = {
  //key: fs.readFileSync('key.pem'),
  //cert: fs.readFileSync('certificate.cert')
};

// Create a service (the app object is just a callback).
var app = express();    
app.set('views', 'views');
app.set('view engine', 'jade');
app.use('/assets', express.static('assets'))
app.get('/',function(req,res){      
    res.sendFile(path.resolve('./templates/home.html'));
});
app.get('/alcohol-licensing/personal-license-application',function(req,res){      
  res.sendFile(path.resolve('./templates/personal-license-application.html'));
});
app.get('/alcohol-licensing/premises-license-application',function(req,res){      
  res.sendFile(path.resolve('./templates/premises-license-application.html'));
});

http.createServer(app).listen(8080);