let mongoose=require('mongoose');
let userModel=mongoose.Schema({
    email:String,
    password:String
})
module.exports=mongoose.model("users", userModel);