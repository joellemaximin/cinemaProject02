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

//let users = require('./routes/users');
// app.use('/users', users);

//display all products
// app.get('/', (req, res) => {
// 	sql.query('SELECT * from users', (err, fields,rows)=> {
// 		res.send(rows)
//     });
// });

app.post('/login', (req,res) =>{
	req.session.email = req.body.email;
	req.session.lastname = req.body.lastname;
	req.session.firstname = req.body.firstname;
	req.session.password = req.body.password;
	res.end('good')
	// const {email, password } = req.body

	// if(email && password ){
	// 	const user = user.find(
	// 		user => user.email === email && user.password === password
	// 	)
	// 	if (user) {
	// 		req.session.userId = user.id
	// 		return res.send("page home")
	// 	}
	// }

	// res.redirect('/login')
	// res.send('error')
});
app.get('/', function(req,res){
	if(req.session.email){
		res.redirect('/logged')
	}
	res.json('')
})

app.get('/logged', (req, res)=>{
	if(req.session.email){
		res.json('bien connecté')
	}
	res.json('not logged')
})

app.post('/register', (req,res)=>{

	// const {firstname, lastname, email, password } = req.body
	// if(firstname && lastname && email && password ){
	// 	const exists = users.some(
	// 		user => user.email === email
	// 	)
	// 	if (!exists){
	// 		const user = {
	// 			id: users.length + 1,
	// 			firstname,
	// 			lastname,
	// 			email,
	// 			password
	// 		}
	// 		sql.push(user);
	// 		req.session.userId = user.id
	// 	}
	// }
	// res.redirect('/register')
	// res.send('erroooor register')
})

var sessionData

app.get('/destroysession',function(req,res){
    sessionData = req.session;
    
    sessionData.destroy(function(err) {
        if(err){
            msg = 'Error destroying session';
            res.json(msg);
        }else{
            msg = 'Session destroy successfully';
            console.log(msg)
            res.json(msg);
        }
    });
});

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
