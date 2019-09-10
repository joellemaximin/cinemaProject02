
const mysql = require('mysql');

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'react_mysql'
});

connection.connect(err => {
	if (err) {
		return err;
	}
})