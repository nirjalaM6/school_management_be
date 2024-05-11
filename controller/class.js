var {postClassService, getClassService}=require('../service/class');
var postClassController=async function(req, res, next){
    let classDetail=req.body;
    var createdClass=await postClassService(classDetail);
    res.send(createdClass);
}
var getClassController=async function(req,res,next){
    var classDetails=await getClassService();
    res.send(classDetails);
}
module.exports={postClassController, getClassController};

