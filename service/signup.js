var {insert,findOne}=require('../data-access/signup');
var postUserService=async function(userDetail){
    let existingEmail=await findOne(userDetail.email);
    if (existingEmail){
        return 'user already exist';
    }
    let postUser=await insert(userDetail);
    return postUser;
}
module.exports={postUserService};