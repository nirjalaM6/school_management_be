var {insert, show}=require('../data-access/class');
var postClassService= async function(classDetails){
    console.log(classDetails);
    var createdClass=await insert(classDetails);
    return createdClass;

}
var getClassService=async function(){
    var getClassDetails=await show();
    return getClassDetails;
}
module.exports={postClassService, getClassService};