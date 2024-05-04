const express = require('express');
const databaseConnection = require('./config/db');

//Import all routes here 
var studentRouter = require("./route/student");

//End of routes 

const app = express()
const port = 3333

let db = databaseConnection();
app.use(express.json());
app.use("/api/",studentRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})