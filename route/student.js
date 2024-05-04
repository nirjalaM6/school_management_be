var express = require("express"); 
var {getAllStudentController,getOneStudentController,postStudentController} = require("../controller/student");

var router = express.Router(); 
router.get("/student", getAllStudentController); 
router.get("/student/:id", getOneStudentController);
router.post("/student", postStudentController)
module.exports = router; 