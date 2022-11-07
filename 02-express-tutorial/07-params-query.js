const express = require('express')
const app = express()
const { products } = require('./data')

app.get('/', (req, res) => {
    //direct the user to api/products
  res.send('<h1> Home Page</h1><a href="/api/products">products</a>')
})

//get the request for api/products
//values need to match with the href
//iterate over the product and send back what you would like
// in this case you will send the id, name, and immage
//this is selective of what you want to send back from the array
app.get('/api/products', (req, res) => {
    //map over the products page
  const newProducts = products.map((product) => {
    //these variables are = to the products
    const { id, name, image } = product
    //return those images
    return { id, name, image }
  })
  //this send a json reponse; you can use it to convert other values to strings
  res.json(newProducts)
})

//looking for product ID
app.get('/api/products/:productID', (req, res) => {
  // console.log(req)
   //route parameter that would allow you to generalize instead of creating a hard code for each array;allows you to find any product within the array
  // console.log(req.params)
  const { productID } = req.params

  //.find product variable which triggers the the id name and image array but you are looking for a specific number within the array and if the product id matches it the number then it will return that array
  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  )
  //if it does not match the singleProduct then produce 404 page
  if (!singleProduct) {
    return res.status(404).send('Product Does Not Exist')
  }
  return res.json(singleProduct)
})

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
  console.log(req.params)
  res.send('hello world')
})

//query string parameters also known as URL parameters
//alows us to send small bits of imfromation to the server using the URL
//this is the route
app.get('/api/v1/query', (req, res) => {
  //access those query string parameters we need to use req.query
  //console.log(req.query)

  //if the user wants to search for specific product; the user can limit how many products they are gettting back
  const { search, limit } = req.query

  //spread operator ...
  let sortedProducts = [...products]

  // if the search is in my querybstring then provide the procducts
  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
//return products that start with the value of search
      return product.name.startsWith(search)
    })
  }
//if the limit exsists youll get specific items in the array
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit))
  }
  //if array's length of array is less than 1
  if (sortedProducts.length < 1) {
    // res.status(200).send('no products matched your search');
    //request was sucessful if it was failure the  it would be false; then you send back an array
    //saying the request was sucessfull but there was no data
    return res.status(200).json({ sucess: true, data: [] })
  }
//we have to return or else JS would continue reading the c
  res.status(200).json(sortedProducts)
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
