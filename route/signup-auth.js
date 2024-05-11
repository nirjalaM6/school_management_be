var {postUserController}=require('../controller/signup');
const express=require('express');
var router=express.Router();
router.post('/user', postUserController);
module.exports=router;