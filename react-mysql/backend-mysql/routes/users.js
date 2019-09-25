var express = require('express');
var router = express.Router();
// var bcrypt = require('bcrypt');
// var jwt = require('jwt');
// var bodyParser = require('body-parser');

//get the db
var sql = require('../models/db.js');

//display all products
router.get('/', (req, res) => {
	sql.query('SELECT * from users', (err, fields,rows)=> {
		res.send(fields)
    });
});

router.post('/login', (req,res) =>{
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
router.get('/', function(req,res){
	if(req.session.email){
		res.redirect('/logged')
	}
	res.json('')
})

router.get('/logged', (req, res)=>{
	if(req.session.email){
		res.json('bien connecté')
	}
	res.json('not logged')
})

router.post('/register', (req,res)=>{

	// const {firstname, lastname, email, password } = req.body
	// if(firstname && lastname && email && password ){
	// 	const exists = router.some(
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

router.get('/destroysession',function(req,res){
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
// users.post('/register', (res, req)=> {
// 	res.json(req.body)
// 	// const today = new Date();
// 	// const newUserData = {
// 	// 	firstname: req.body.firstname,
// 	// 	lastname: req.body.lastname,
// 	// 	email: req.body.email,
// 	// 	password: req.body.password,
// 	// 	productId: req.body.product_id,
// 	// 	// create: today
// 	// }
// 	// sql.findOne({
// 	// 	where: {
// 	// 		email: req.body.email
// 	// 	}
// 	// })
// 	// .then(sql => {
// 	// 	if(!sql) {
// 	// 		bcrypt.hash(req.body.password, 10, (err, hash)=> {
// 	// 			newUserData.password = hash
// 	// 			sql.create(newUserData)
// 	// 			.then(user => {
// 	// 				res.json({status: user.email + 'Enregistré '})
// 	// 			})
// 	// 			.catch(err => {
// 	// 				res.send(err)
// 	// 			})
// 	// 		})
// 	// 	} else {
// 	// 		res.json({error: "user existe déjà !! "})
// 	// 	}
// 	// })
// 	// .catch(err => {
// 	// 	res.send(err)
// 	// })
// }
module.exports = router;
