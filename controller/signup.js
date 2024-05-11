var {postUserService}=require('../service/signup');
const postUserController=async function(req,res,next){
    let userDetail=req.body
    let createdUser=await postUserService(userDetail);
    res.send(createdUser);
}
module.exports={postUserController};
