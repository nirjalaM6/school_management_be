var {insert} = require('../data-access/student')
var getAllStudentService=function(){
    let listOFStudent = [{id:1,name:"ram",age:30},{id:2,name:"shyam",age:20},{id:3,name:"Suraj", age:16}];
    // filter if age is greater than 25 
    let ageGreaterThan25=[];
    for (let i= 0; i<listOFStudent.length; i++){
        if (listOFStudent[i].age>25){
            ageGreaterThan25.push(listOFStudent[i]);
        }
    }
    return ageGreaterThan25;
}
    

var getOneStudentService=function(idUrl){
    let listOFStudent = [{id:1,name:"ram",age:30},{id:2,name:"shyam",age:20},{id:3,name:"Suraj", age:16}];

    // Grab the id from URL 
    for (let i=0; i<listOFStudent.length; i++){
        if (idUrl==listOFStudent[i].id){
            return listOFStudent[i];
        }
    }
    return(`No ${idUrl} found in the list`);
}
var postStudentService=async function(studentDetails){
    var createdStudent= await insert(studentDetails);
    return createdStudent;
}

module.exports = {getAllStudentService,getOneStudentService,postStudentService};