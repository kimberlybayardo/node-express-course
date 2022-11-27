//express are middleware functions that execute during the request to the server each middleware function has request and response objects and 
const express = require('express')
const app = express()

//req => middleware => res
//request comes in and will do something and then it will send out the response
const logger = (req, res, next) => {
  const method = req.method
  const url = req.url
  const time = new Date().getFullYear()
  console.log(method, url, time)
  next()
}

app.get('/', logger, (req, res) => {
  res.send('Home')
})
app.get('/about', logger, (req, res) => {
  res.send('About')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
