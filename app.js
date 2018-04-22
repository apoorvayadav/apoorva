var express= require('express');
var expressHbs = require('express-handlebars');
var session =require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();  //init app


var routes = require('./routes/index');
var path = require('path');


// view engine setup
//app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', expressHbs({defaultLayout: 'layout', extname: '.hbs'}));
app.set('view engine', '.hbs');
//layouts.register(handlebars);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());

//set public folder
app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(path.join(__dirname,'views')));


//set routes folder
//app.use(express.static(path.join(__dirname,'routes')));
app.use('/', routes);


// Route Files
//let menu = require('./routes/index');
//app.use('/resume', menu);
//app.use('/design', menu);
//app.use('/art', menu);

// Start Server
app.listen(80, function(req,res){
  console.log('Server started on port 3000...');
});
