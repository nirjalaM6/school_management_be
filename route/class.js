const express=require('express');
var {postClassController, getClassController}=require('../controller/class');
var router=express.Router();
router.post("/class",postClassController);
router.get("/class", getClassController)
router.get("/student/:id", )
module.exports=router;