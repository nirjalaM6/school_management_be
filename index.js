const express = require('express');
const databaseConnection = require('./config/db');
const app = express()
const port = 3333

let db = databaseConnection();
app.get('/api', (req, res) => {
  res.send('Hello Suraj!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})