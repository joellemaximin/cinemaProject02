const mysql = require('mysql');

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	// port: 3306,
	password: '',
	database: 'react_mysql'
});


exports.connect = connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);
});

// exportation de la base de donnée aux models
module.exports = connection;
