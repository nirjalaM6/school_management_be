var StudentModelDb=require('../model/student');
async function insert (studentDetails){
    console.log(studentDetails);
    let createdStudent = await StudentModelDb.create(studentDetails);
    return createdStudent; 
}
module.exports={insert};
