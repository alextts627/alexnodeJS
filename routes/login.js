var express = require('express');
var router = express.Router();

var db  = require('../db');


router.get('/', function(req,res) {
    console.log('this is login index');
//console.log(req);

res.cookie('alex', '123');

console.log(req.cookies.alex);


    db.query('SELECT * FROM `Users`', function(err, rows, fields) {
        if (err) throw err;
        console.log('The solution is: ', rows);

//       res.send(rows);

    });

    res.render('login');
    //res.send(rows);
});

router.get('/123', function(req,res) {
console.log('this is login 123');

});



module.exports = router;

