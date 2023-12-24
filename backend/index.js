// simple js file
const express = require('express')

const app = express()
const port = 3001

app.get('/', (req, res) => {
  setTimeout(function(){
res.status(200).send("hello ")
  },1000)
})
app.listen(port, () => {
  console.log(`example app listening on port ${port}`)
})
