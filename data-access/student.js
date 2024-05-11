var StudentModelDb=require('../model/student');
async function insert (studentDetails){
    console.log(studentDetails);
    let createdStudent = await StudentModelDb.create(studentDetails);
    return createdStudent; 
}
async function remove(studentInformation){
    console.log(`id to be deleted is ${studentInformation}`);
    let deleteedStudent= await StudentModelDb.deleteMany({id:studentInformation});
    return deleteedStudent;

}
async function update(studentId, updatedStudentDetail){
    console.log(studentId);
    let updatedStudent=await StudentModelDb.updateMany({id:studentId},{name:updatedStudentDetail.name, age:updatedStudentDetail.age } );
    return updatedStudent
}
async function show(){
    let getAllStudentDetail=await StudentModelDb.find({});
    return getAllStudentDetail;
} 
async function showSearch(studentNameUrl){
    console.log("studentNameUrl");
    console.log(studentNameUrl);
    let getAllStudentDetailSearch= await StudentModelDb.find({name:studentNameUrl});
    console.log(getAllStudentDetailSearch);
    return getAllStudentDetailSearch;
}
async function showOne(studentIdUrl){
    let getOneStudentDetail =await StudentModelDb.findOne({id:studentIdUrl});
    console.log(getOneStudentDetail)
    return getOneStudentDetail; 
}



module.exports={insert, remove, update, show, showOne,showSearch};
