let mongoose=require('mongoose');
let studentModel=mongoose.Schema({
    id:Number,
    name:String,
    address:String,
    age:Number
})
module.exports=mongoose.model("student", studentModel);