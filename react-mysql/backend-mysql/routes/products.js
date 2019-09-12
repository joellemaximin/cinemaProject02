let express = require('express');
let router = express.Router();

//get the db
var sql = require('../models/db.js');

//display all products
router.get('/', (req, res) => {
	sql.query('SELECT * from products', (err, fields,rows)=> {
		res.send(fields)
    });

});

//add a product
router.post('/add', (req, res) => {
	const {name, description, price } = req.body;
	sql.query('INSERT INTO name, description, price SET ?', {
		name: name,
	  	description: description,
	  	price: price
	}, (err, fields,rows) => {
	    console.log("Could not delete" + err);
	    res.send(fields)
	    res.send('Bien ajouter');
	});
});

//display one product
router.get('/:id', (req, res) => {
	sql.query('SELECT * from products WHERE product_id = ?', [req.params.id], (err, fields,rows)=> {
		res.send(fields)
    });

});

//delete one
router.delete('/:id', (req, res)=> {
    sql.query('DELETE FROM products WHERE product_id = ?', [req.params.id], (err, results, fields) => {
	if (err) {
      console.log("Could not delete" + err);
      return;
    }
    res.send("Deleted!!");
	});
});


module.exports = router;