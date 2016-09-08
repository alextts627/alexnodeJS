function validateReq(reqObj){
	for(var key in reqObj){
		if(obj.hasOwnProperty(key))
			validateItem(key, obj[key]);
	}
}

function validateItem(key, value){
	switch(key){
		case "user_name": return validateUser(value);
		case "password": return validatePassword(value);
		case "email": return validateEmail(value);
		default: break;
	}
}
function validateId(id){
	var uid = /^[0-9]$/;
	return uid.test(id);
}

//for username
function validateUser(user_name){
  var usernameRegex = /^[a-zA-Z0-9]{3,20}$/;	
  var user_name = user_name;

  if(usernameRegex.test(user_name.value)){
  	return true;
  }
  else
  	return false;
  return { isvalid: true, message: "Please check the username" }
} 

//for password
function validatePassword(password){
  var pw = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;	
  return pw.test(password);
} 

//for email
function validateEmail(email) {
  var em = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return em.test(email);
}

 Object.keys(reqObj).forEach(function(key) {
    str += 'key=' + key + ', value:' + obj[key];
  });


//INSERT INTO tbl_name (a,b,c) VALUES(1,2,3),(4,5,6),(7,8,9);

var str;


for(var key in reqObj){
    if(obj.hasOwnProperty(key)){
      validateItem(key, obj[key]);
      
      str += key; 
      

    }


  }



