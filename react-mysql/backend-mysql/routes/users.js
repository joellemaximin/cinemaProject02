var express = require('express');
var users = express.Router();
var bcrypt = require('bcrypt');
var jwt = require('jwt');
var bodyParser = require('body-parser');

//get the db
var sql = require('../models/db.js');

//display all products
// users.get('/', (req, res) => {
// 	sql.query('SELECT * from users', (err, fields,rows)=> {
// 		res.send(fields)
//     });
// });

users.post('/register', (res, req)=> {
	res.json(req.body)
	// const today = new Date();
	// const newUserData = {
	// 	firstname: req.body.firstname,
	// 	lastname: req.body.lastname,
	// 	email: req.body.email,
	// 	password: req.body.password,
	// 	productId: req.body.product_id,
	// 	// create: today
	// }
	// sql.findOne({
	// 	where: {
	// 		email: req.body.email
	// 	}
	// })
	// .then(sql => {
	// 	if(!sql) {
	// 		bcrypt.hash(req.body.password, 10, (err, hash)=> {
	// 			newUserData.password = hash
	// 			sql.create(newUserData)
	// 			.then(user => {
	// 				res.json({status: user.email + 'Enregistré '})
	// 			})
	// 			.catch(err => {
	// 				res.send(err)
	// 			})
	// 		})
	// 	} else {
	// 		res.json({error: "user existe déjà !! "})
	// 	}
	// })
	// .catch(err => {
	// 	res.send(err)
	// })
}
module.exports = users;
