const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')
//  req => middleware => res
//app.use: pass the middleware : order matters so 
//This will be applied to all the paths that start with /api. ie: /api/products and /api/items
  //app.use('/api', logger)
//if the app is removed: then it will be applied to the rest of your code: home, about, products, and items
  //app.use(logger)
// api/home/about/products

//this will be executed in order
app.use([logger, authorize])
app.get('/', (req, res) => {
  res.send('Home')
})
app.get('/about', (req, res) => {
  res.send('About')
})
app.get('/api/products', (req, res) => {
  res.send('Products')
})
app.get('/api/items', (req, res) => {
  console.log(req.user)
  res.send('Items')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})

//-----------------------------------------------------Notes----------------------------------------------------------
//express comes with middleware functions;we just need to reference the docs and supply those values that are available
//thrid party- we have to install it; run npm i morgan
