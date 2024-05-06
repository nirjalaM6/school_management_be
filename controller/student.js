
var {getAllStudentService,getOneStudentService,postStudentService, deleteStudentService, updateStudentService} = require("../service/student")

let getAllStudentController = async function(req,res,next){
   let studentDetails =  await getAllStudentService();
   res.send(studentDetails);
};

let getOneStudentController = async function(req,res,next){
    let idFromUrl = req.params.id; 
    let OneStudent=await getOneStudentService(idFromUrl);
    res.send(OneStudent);
};
let postStudentController= async function(req, res,next){
    let studentDetails=req.body;
    let createdStudent = await postStudentService(studentDetails);
    res.send(createdStudent);
}
let deleteStudentController= async function(req,res,next){
    let idFromUrl = req.params.id; 
    let deleteStudent= await deleteStudentService(idFromUrl);
    res.send(deleteStudent);
}
let updateStudentController=async function(req,res,next){
    let idFromUrl = req.params.id;
    let updatedStudentDetail=req.body; 
    let updatedStudent=await updateStudentService(idFromUrl, updatedStudentDetail);
    res.send(updatedStudent);
}

module.exports = {getAllStudentController,getOneStudentController,postStudentController, deleteStudentController, updateStudentController};