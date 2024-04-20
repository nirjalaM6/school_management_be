const express = require('express')
const app = express()
const port = 3333

app.get('/api', (req, res) => {
  res.send('Hello Suraj!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})