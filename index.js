const express = require('express');
const databaseConnection = require('./config/db');

//Import all routes here 
var studentRouter = require("./route/student");
var classRouter=require("./route/class");
var userRouter=require("./route/signup-auth");
var loginRouter=require("./route/login",)
//End of routes 

const app = express()
const port = 3333

let db = databaseConnection();
app.use(express.json());
app.use("/api/",studentRouter);
app.use("/api/", classRouter);
app.use("/api/", userRouter);
app.use("/api/", loginRouter)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})