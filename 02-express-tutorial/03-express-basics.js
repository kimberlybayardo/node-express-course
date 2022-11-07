//console.log('Express Tutorial');

//we are looking for the express library
const express = require('express')
//similar to the server; we are getting a fucntion back from express and we just invoke it 
const app = express()

//all the browsers are process a GET request
//we need to provide a path that tells us what the user is trying to access. we start with the root
//this call will always be invoved when the user is performing a get request on our root
app.get('/', (req, res) => {
  console.log('user hit the resource')
  //incoming request message
  res.status(200).send('Home Page')
})

app.get('/about', (req, res) => {
  res.status(200).send('About Page')
})
 //covers all methods see below
app.all('*', (req, res) => {
//startus code and then sending the message 
  res.status(404).send('<h1>resource not found</h1>')
})


app.listen(5000, () => {
  console.log('server is listening on port 5000...')
})

//all the methods
// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen-listening for the server or port were listening on


