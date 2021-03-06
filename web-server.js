var express = require('express'),
	path = require('path'),
	http = require('http'),
	mongoose = require("mongoose");
	

var app = express();

var errorHandler = require('express-error-handler'),
  handler = errorHandler({
    static: {
      '404': '404.html',
    }
  });
// Configuration
app.configure(function(){
    app.set('views', __dirname + '/views');
   // app.use(express.logger());
	app.use(express.bodyParser());  
    app.use(express.methodOverride());
    app.use(express.cookieParser('192829ssajmkkol'));
    app.use(express.session());

	app.use(app.router);
	app.use(express.static(path.join(__dirname, 'app')));
	app.use( errorHandler.httpError(404) );
	app.use( handler );
});

app.configure('development', function() {
    app.use(express.errorHandler());
});

app.configure('production', function() {
    app.use(express.errorHandler());
});

mongoose.connect('mongodb://localhost/sandbox');
require('./routes.js')(app);

// Configure passport
http.createServer(app).listen(8080, '0.0.0.0', function() {
    console.log("Express server listening on %s:%d in %s mode", '192.168.0.14', 3000, app.settings.env);
});