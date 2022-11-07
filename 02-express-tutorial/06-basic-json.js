//json response
//setting up express
const express = require('express')
const app = express()

//exporting of the products and the iinfromatino for the variable products is located in the ./data file
const { products } = require('./data')

app.get('/', (req, res) => {
//method is json
//middleware
//this send a json reponse; you can use it to convert other values to strings
  res.json(products)
})

//invoke the express by calliing .listen
app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})

