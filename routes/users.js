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
// post obj db update(change everything except id)
router.post('/:id', function(req, res, next) {
	var id =req.params.id;
  var user_name =req.params.user;
  var password =req.params.password;
  var email =req.params.email;
	//var newId = req.body;

	

  var cmd = "INSERT INTO `users` (Uid,Acc,Pass,Email,Create_time) VALUES ('id','user_name','password','email', now())";

    //get the info with the assign id from DB
  db.query(cmd, function(err, rows, fields) {
        
    //check if DB is coonected
    if (err){
      res.send('DB not connected'+err);
      exit;
    }
    console.log('The solution is: ', rows);
    //search the uid from db
    if(rows.length == 0){
      console.log(111);
                //res.sendStatus(404);
      res.send('id not exist');
    }
    
    //console.log(rows[0].Acc);
    //  res.send('respond with a resource');
    if(id){
      console.log(222);
      //set cookie
      //res.cookie();
      //res send status success
      //res.sendStatus(200); // status call
      res.send('update success');
    }
    else{
      console.log('id not exist');
    }
  })
});


router.post('/:id', function(req, res, next) {
  var reqObj = req.body;
  console.log(reqObj);

  var cmd = "INSERT INTO `users` SET ?";
  var cmdVal = { "Acc" : reqObj.Acc, "Pass" : reqObj.Pass, "Email" : reqObj.Email, "Create_time" : now() };
    
  db.query(cmd, cmdVal, function(err, rows, fields) {
        
    //check if DB is coonected
    if (err){
      res.send('DB not connected'+err);
      exit;
    }
    console.log('The solution is: ', rows);
    //search the uid from db
    if(rows.length == 0){
      console.log(111);
                //res.sendStatus(404);
      res.send('id not exist');
    }
    
    //console.log(rows[0].Acc);
    //  res.send('respond with a resource');
    if(id){
      console.log(222);
      //set cookie
      //res.cookie();
      //res send status success
      //res.sendStatus(200); // status call
      res.send('update success');
    }
    else{
      console.log('id not exist');
    }
  })
});




//post id and one parameter 
router.put('/:id', function(req, res, next) {
	
  //var cmd = mySQL alter into the uid
  var id =req.params.id;
  var user_name =req.params.user;
  var password =req.params.password;
  var email =req.params.email;
 
  var reqObj = req.body;
  
  console.log(reqObj);

  if(!(id||reqObj)){
    res.send('nothing to update');
  }
  else{
  

    
    var cmd = "INSERT INTO `users` (Uid,Acc,Pass,Email,Create_time) VALUES ('id','user_name','password','email', now())";

    //get the info with the assign id from DB
    db.query(cmd, function(err, rows, fields) {
        
    //check if DB is coonected
      if (err){
        res.send('DB not connected'+err);
        exit;
      }
      console.log('The solution is: ', rows);
      //search the uid from db
      if(rows.length == 0){
        console.log(111);
                //res.sendStatus(404);
        res.send('id not exist');
      }
    
      //console.log(rows[0].Acc);
      //  res.send('respond with a resource');
      if(id){
        console.log(222);
      //set cookie
      //res.cookie();
      //res send status success
      //res.sendStatus(200); // status call
        res.send('update success');
      }
      else{
        console.log('id not exist');
      }
    })
  }
  //check if the uid match in DB 
  //connect to the DB
  //and update the info into the DB
});

// id , delete with id
router.delete('/:id', function(req, res, next) {
  //asign id
  var id =req.params.id;
  // delete record in table command
  var cmd = "DELETE FROM `users` WHERE Uid = 'id'";

  db.query(cmd, function(err, rows, fields) {
        
            //check if DB is coonected
            if (err){
                res.send('DB not connected'+err);
            }
            console.log('The solution is: ', rows);
            //if acc not exist
            if(rows.length == 0){
                console.log(111);
                //res.sendStatus(404);
                res.send('not exist');
            }
            //db check acc/pw
            //console.log(rows[0].Acc);
            //  res.send('respond with a resource');
            if(id){
                console.log(222);
                //set cookie
                //res.cookie();
            
                //res send status success
                //res.sendStatus(200); // status call
                res.send('delete success');
            }
            else{
                console.log('id not exist');
            }
  })
});


module.exports = router;
