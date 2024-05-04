
var {getAllStudentService,getOneStudentService,postStudentService} = require("../service/student")

let getAllStudentController = function(req,res,next){
   let listOfStudentGreaterthan20 =  getAllStudentService();
   res.send(listOfStudentGreaterthan20);
};

let getOneStudentController = function(req,res,next){
    let idFromUrl = req.params.id; 
    let listOfOneStudent=getOneStudentService(idFromUrl);
    res.send(listOfOneStudent);
};
let postStudentController= async function(req, res,next){
    let studentDetails=req.body;
    let createdStudent = await postStudentService(studentDetails);
    res.send(createdStudent);
}
module.exports = {getAllStudentController,getOneStudentController,postStudentController};