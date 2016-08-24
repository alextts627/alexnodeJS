var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '1234',
  database : 'node_db'
});

module.exports = connection;

//connection.connect();

//connection.query('SELECT * FROM `Users`', function(err, rows, fields) {
//  if (err) throw err;
//  console.log('The solution is: ', rows);
//});

//connection.end();
