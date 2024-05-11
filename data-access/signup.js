var signUpModelDb=require('../model/signup');
async function insert(userDetail){
    let createUser=await signUpModelDb.create(userDetail);
    return createUser;
}
async function findOne(userEmail){
    let userWithEmail=await signUpModelDb.findOne({email:userEmail});
    return userWithEmail;
}
module.exports={insert,findOne};