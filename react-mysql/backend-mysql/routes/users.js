var express = require('express');
var router = express.Router();

//get the db
var sql = require('../models/db.js');

//display all products
router.get('/', (req, res) => {
	sql.query('SELECT * from users', (err, fields,rows)=> {
		res.send(fields)
    });

});
module.exports = router;
