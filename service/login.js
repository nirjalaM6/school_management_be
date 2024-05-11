var {findOne}=require('../data-access/signup');
var postLoginService=async function (userEmail, userPassword){
    let existingEmail=await findOne(userEmail);
    if (existingEmail==null){
        return `student with ${userEmail} doesn't exist`;
    }
    if (existingEmail.email==userEmail && existingEmail.password==userPassword){
        return "log in success"
    }
    else 
    {
        return "failed"
    }
}
module.exports={postLoginService};