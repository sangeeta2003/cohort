const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3001
// middleware
app.use(bodyParser.json())

app.post('/', (req, res) => {
  console.log(req.body)
  res.send('hello world')
})
app.listen(port, () => {
  console.log(`example app listening on port ${port}`)
})
