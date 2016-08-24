var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/login', function(req, res, next) {
  var user_name=req.body.user;
  var password=req.body.password;
  

  console.log("User name = "+user_name+", password is "+password);
  res.end("good");
    //post
    //db check acc/pw


    //set cookie
    //res send status success
});

router.get('/user/:id', function(req, res) {
  res.send('user ' + req.params.id);
});

router.put('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.delete('/', function(req, res, next) {
  res.send('respond with a resource');
});



module.exports = router;
