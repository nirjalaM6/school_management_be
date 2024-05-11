var {insert, remove, update, show, showOne,showSearch} = require('../data-access/student');
var getAllStudentService=async function(){
    var studentDetails=await show();
    return studentDetails;
}

var getOneStudentService=async function(idUrl){
    var oneStudentDetail=await showOne(idUrl)
    if(oneStudentDetail==null){
        return `student with ${idUrl} doesn't exist.`;
    }
    return oneStudentDetail;
}
var postStudentService=async function(studentDetails){
    var createdStudent= await insert(studentDetails);
    return createdStudent;
}
var deleteStudentService=async function(idUrl){
    let existingStudent = await showOne(idUrl); 
    if(existingStudent == null){
        return `student with ${idUrl} doesn't exist.`;
    }
    var deletedStudent= await remove(idUrl);
    return deletedStudent;
}
var updateStudentService=async function(idUrl, updatedStudentDetail){
    let existingStudent = await showOne(idUrl); 
    if(existingStudent == null){
        return `student with ${idUrl} doesn't exist.`;
    
}
    var updatedStudent=await update(idUrl, updatedStudentDetail);
    return updatedStudent
}
var searchStudentService=async function(nameUrl){
    var searchStudentName=await showSearch(nameUrl);
    return searchStudentName;
}

module.exports = {getAllStudentService,getOneStudentService,postStudentService,deleteStudentService, updateStudentService,searchStudentService};