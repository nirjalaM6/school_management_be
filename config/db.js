const { on } = require('events');
const { builtinModules } = require('module');
const mongoose = require('mongoose');

async function databaseConnection() {
 let mongoDb = mongoose.connect('mongodb+srv://nirjalamaharjan72:IXgFp3RLdZCGfCJF@cluster0.yx0bynj.mongodb.net/school_management_db?retryWrites=true&w=majority&appName=Cluster0');
 let mongoDbConnection=mongoose.connection;
 mongoDbConnection.on("error", console.error.bind(console,"There is a connection error"));
 mongoDbConnection.once("open", ()=>{console.log("Hurrey! connected to database")});
}
    
module.exports=databaseConnection;