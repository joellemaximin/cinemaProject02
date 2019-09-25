var express = require('express');
var path = require('path');
var cors = require('cors');
var bodyParser = require('body-parser');
// var coockieParser = require('coockie-parser');
var session = require('express-session')

var app = express();
// var users = require('./models/db.js');

app.use(cors());
app.set('views', __dirname + '/views'); // set express to look in this folder to render our view
app.set('view engine', 'ejs'); // 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const SESS_LIFETIME = 1000 * 60 * 60;

app.use(session({
	secret: 'shhhaoe/eao,secret',
	resave: false,
	saveUninitialized: false,
	cookie: {
		maxAge: SESS_LIFETIME
	}
}))

let products = require('./routes/products');
app.use('/products', products);

let users = require('./routes/users');
app.use('/users', users);

//display all products
// app.get('/', (req, res) => {
// 	sql.query('SELECT * from users', (err, fields,rows)=> {
// 		res.send(rows)
//     });
// });


// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
