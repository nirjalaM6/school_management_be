var express=require('express');
var router=express.Router();
var {postLoginController}=require('../controller/login');
router.post('/login', postLoginController);
module.exports=router;