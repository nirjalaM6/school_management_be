const mongoose=require('mongoose');
let classModel=mongoose.Schema({
    classId:Number,
    className:String
})
module.exports=mongoose.model("class",classModel);
