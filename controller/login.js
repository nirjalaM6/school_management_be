var {postLoginService}=require('../service/login');
var postLoginController =async function(req, res, next){
    let userEmail=req.body.email;
    let userPassword=req.body.password;
    let loggedUser=await postLoginService(userEmail, userPassword);
    res.send(loggedUser);
}
module.exports={postLoginController}