var classModelDb=require('../model/class');
async function insert(classDetail){
    let createdClass=await classModelDb.create(classDetail);
    return createdClass;
}
async function show(){
    let getClassDetails=await classModelDb.find({});
    return getClassDetails;
}
async function showOne(){}
module.exports={insert,show};