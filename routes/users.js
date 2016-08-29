var express = require('express');
var router = express.Router();

var db  = require('../db');
/* GET users listing. */

//set up users
function User(user){
  this.username = user.username;
  this.userpass = user.userpass;
};

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



//check if the user is in the DB
//User.getUser = function getUser(username, callback){
  //var cmd = "SELECT * FROM `Users` WHERE uID =?";

//}

router.post('/login', function(req, res, next) {
  //post
  console.log(req.body);




  var user_name=req.body.user;
  var password=req.body.password;

  console.log(12);
  if (!user_name){
      res.send('please enter user name');
      console.log('please enter user name');
      //exit;
  }
 // else if(user_name){
      //check sql injection

  //}
  else if(!password){
      res.send('please enter user password');
      console.log('please enter user password');
     
  }
  else{
      console.log(13);

      var cmd = "SELECT * FROM `Users` WHERE Acc =?";


      db.query(cmd, [user_name], function(err, rows, fields) {
        
            //check if DB is coonected
            if (err){
                res.send('DB not connected'+err);
            }
            console.log('The solution is: ', rows);
            //if acc not exist
            if(rows.length == 0){
                console.log(111);
                //res.sendStatus(404);
                res.send('user not exist');
            }
            //db check acc/pw
            //console.log(rows[0].Acc);
            if(user_name == rows[0].Acc && password == rows[0].Pw){
                console.log(222);
                //set cookie
                res.cookie('loggedin', rows[0].Email);
            
                //res send status success
                //res.sendStatus(200); // status call
                res.send('success');
            }
            else{
                console.log('password not correct');
            }

      })}
        //console.log(obj.Acc);
});

//taking contents from DB    
router.get('/:id', function(req, res) {
    //to do
    //asign id
    var id =req.params.id;
    var cmd = "SELECT * FROM `Users` WHERE Uid = 'id'";
    

    db.query(cmd, function(err, rows, fields) {
        
            //check if DB is coonected
            if (err){
                res.send('DB not connected'+err);
                exit;
            }
            console.log('The solution is: ', rows);
    //search the uid from db
    //output the info with matched uid
            res.send('user' + id);
    })

});

//router.put('/:id', function(req, res, next) {
  //var cmd = mySQL alter into the uid
  //res.send('info changed');
//});


//router.delete('/', function(req, res, next) {
//  res.send('respond with a resource');
//});



module.exports = router;
