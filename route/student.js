var express = require("express"); 
var {getAllStudentController,getOneStudentController,postStudentController, deleteStudentController, updateStudentController} = require("../controller/student");

var router = express.Router(); 
router.get("/student", getAllStudentController); 
router.get("/student/:id", getOneStudentController);
router.post("/student", postStudentController);
router.delete("/student/:id",deleteStudentController);
router.put("/student/:id", updateStudentController);
module.exports = router; 