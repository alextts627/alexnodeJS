var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var db  = require('../db');
var validate = require('validate');
/* GET users listing. */

//set up users
function User(user){
  this.username = user.username;
  this.userpass = user.userpass;
};



router.post('/', function(req, res, next) {
  res.send('welcome');
});



//check if the user is in the DB

router.post('/login', function(req, res, next) {
  //post
  console.log(req.body);

  var user_name=req.body.user;
  var password=req.body.password;

  //check if the username is entered 
  if (!user_name){
      res.send('please enter user name');
      console.log('please enter user name');
      //exit;
  }
  //check if the user name in correct format
  else if(!(validateUser(user_name))){
      res.send('please enter the account in the corretc format');
      exit;
  }

  else if(!password){
      res.send('please enter user password');
      console.log('please enter user password');  
  }
  else if(!(validatePassword(password))){
      res.send('please enter the apassword in the corretc format');
      exit;
  }
  else{

      var cmd = "SELECT * FROM `users` WHERE Acc =?";


      db.query(cmd, [user_name], function(err, rows, fields) {
        
            //check if DB is coonected
            if (err){
                res.send('DB not connected'+err);
            }
            console.log('The solution is: ', rows);
            //if acc not exist
            if(rows.length == 0){
                //res send stats 
                res.sendStatus(404).send('user not exist');
            }
            //db check acc/pw
            if(user_name == rows[0].Acc && password == rows[0].Pass){
                //set cookie
                res.cookie('loggedin', rows[0].Email);
            
                //res send status success
                res.sendStatus(200).send('success'); // status call
            }
            else{
                console.log('password not correct');
            }

      })}
});

//taking contents from DB    
router.get('/:id', function(req, res) {

  	// check if the id is passed by user
  	if(!req.params.id){
    	res.send('No id entered');
  	}
  	else if(!validateId(req.params.id)){
  		res.send('id not correct format');
  	}
  	else{
    	//asign id 
    	var id = req.params.id;
    	//check if id is integer 

    	var cmd = 'SELECT * FROM users WHERE Uid = \''+ id +'\'';

	    //get the info with the assign id from DB
    	db.query(cmd, function(err, rows, fields) {
        
            //check if DB is coonected
        	if (err){
            	res.send('DB not connected'+err);
            	exit;
        	}
    		//search the uid from db
    		else if(rows.length == 0){
        		res.send('id not exist').sendStatus(404);
    		}
    		else(rows[0].Uid){
            	//res send status success
        		res.sendStatus(200).send('success found this' + id);
    			//output the info with matched uid
    			res.send(rows);
    		} 
    	})
	}
})};






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
  

    
    


//need to be fix 
router.put('/:id', function(req, res, next) {
	var reqObj = req.body;
	if(!req.params.id){
    	res.send('No id entered');
  	}
  	else if(!validateId(req.params.id)){
  		res.send('id not correct format');
  	}
  	else if(!reqObj){
  		res.send('Nothing to be updated')
  	}
  	else{

  		validateReq(reqObj);

  		var cmd = "INSERT INTO `users` SET ?";
  		//update acc
  		if(reqObj.Acc)
  		{
  			
  			//update acc&password
  			else if(reqObj.Pass){
  				//check password
  				if(!(validatePassword(reqObj.Pass))){
      				res.send('please enter the password in the corretc format');
      				exit;
  				}
  				//update email
  				else if(reqObj.Email){
  					//check email
  					if(!(validateEmail(reqObj.Email))){
      					res.send('please enter the Email in the corretc format');
      					exit;
  					}
  					else{
  						//update all 
  						var cmdVal = {"Acc" : reqObj.Acc, 
  			      	  	  			  "Pass" : reqObj.Pass, 
  					  	  			  "Email" : reqObj.Email, 
  					  	  			  "Update_time" : now() 
  			         	 			};
  					}
  				}
  				//update only acc & pass	
  				else{
  					var cmdVal = {"Acc" : reqObj.Acc, 
  			      	  	  		  "Pass" : reqObj.Pass, 
  					  	  		  "Update_time" : now() 
  			         	 		};
  				}	


  			}
  			//update acc & email
  			else(reqObj.Email){
  				var cmdVal = {"Acc" : reqObj.Acc, 
  			      	  	  	  "Email" : reqObj.Email, 
  					  	  	  "Update_time" : now() 
  			         	    };
  			}
  		//update pass	
  		else if(reqObj.Pass){
  			//check password
  			if(!(validatePassword(reqObj.Pass))){
      			res.send('please enter the password in the corretc format');
      			exit;
  			}
  			//update email
  			else if(reqObj.Email){
  				//check email
  				if(!(validateEmail(reqObj.Email))){
      				res.send('please enter the Email in the corretc format');
      				exit;
  				}
  				else{
  						//update Password & Email 
  						var cmdVal = {"Pass" : reqObj.Pass, 
  					  	  			  "Email" : reqObj.Email, 
  					  	  			  "Update_time" : now() 
  			         	 			};
  					}
  			}
  		}
  		else if(reqObj.Email)


  		}







}
  		//checking the format of data
  		
  		else if(!(validatePassword(reqObj.Pass))){
      		res.send('please enter the password in the corretc format');
      		exit;
  		}
  		else if(!(validateEmail(reqObj.Email))){
      		res.send('please enter the Email in the corretc format');
      		exit;
  		}
  		else{

  			var cmd = "INSERT INTO `users` SET ?";
  			var cmdVal = {"Acc" : reqObj.Acc, 
  			      	  	  "Pass" : reqObj.Pass, 
  					  	  "Email" : reqObj.Email, 
  					  	  "Create_time" : now() 
  			         	};

    		db.query(cmd, cmdVal, function(err, rows, fields) {        
   			//check if DB is coonected
    			if (err){
      				res.send('DB not connected'+err);
      				exit;
    			}
    			else{
    				res.sendStatus(200).send('update success');
    				console.log(rows);
    			}	
  			})
    	}
}});


// post obj db update(change everything except id)
router.post('/:id', function(req, res, next) {
	var reqObj = req.body;
	if(!req.params.id){
    	res.send('No id entered');
  	}
  	else if(!validateId(req.params.id)){
  		res.send('id not correct format');
  	}
  	else{
  		//checking the format of data
  		if(!(validateUser(reqObj.Acc))){
  			res.send('please enter the account in the corretc format');
      		exit;
  		} 
  		else if(!(validatePassword(reqObj.Pass))){
      		res.send('please enter the password in the corretc format');
      		exit;
  		}
  		else if(!(validateEmail(reqObj.Email))){
      		res.send('please enter the Email in the corretc format');
      		exit;
  		}
  		else{

  			var cmd = "INSERT INTO `users` SET ?";
  			var cmdVal = {"Acc" : reqObj.Acc, 
  			      	  	  "Pass" : reqObj.Pass, 
  					  	  "Email" : reqObj.Email, 
  					  	  "Create_time" : now() 
  			         	 };

    		db.query(cmd, cmdVal, function(err, rows, fields) {        
   			//check if DB is coonected
    			if (err){
      				res.send('DB not connected'+err);
      				exit;
    			}
    			else{
    				res.sendStatus(200).send('update success');
    				console.log(rows);
    			}	
  			})
    	}
}});



// id , delete with id
router.delete('/:id', function(req, res, next) {
  	//asign id
  	if(!req.params.id){
    	res.send('No id entered');
  	}
  	else if(!validateId(req.params.id)){
  		res.send('id not correct format');
  	}
  	else{
  		var id = req.params.id;
    	var cmd = 'SELECT * FROM users WHERE Uid = \''+ id + '\''

  		db.query(cmd, function(err, rows, fields) {
        
            //check if DB is coonected
            if (err){
                res.send('DB not connected'+err);
            }
            //check if id exist in DB
            else if(id){
                // status call
                res.sendStatus(200).send('delete success');
            }
            else{
                console.log('id not exist');
            }
  		})
  	}
});



module.exports = router;
