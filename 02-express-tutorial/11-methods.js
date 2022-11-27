const express = require('express')
const app = express()
let { people } = require('./data')

// static assets
//path to target all the files within that file
app.use(express.static('./methods-public'))

//parse form data; add the values to the req.body property
//express.urlencoded()- it parses incomig requests with urlencoded payloads and is based on body parser
//extended property option allows to chooe between parsing the URL-encoded data with the querystring library(when false)or the qs library (when true))
app.use(express.urlencoded({ extended: false }))

// parse json
app.use(express.json())

//read data; always start with GET
app.get('/api/people', (req, res) => {
  res.status(200).json({ success: true, data: people })
})

//-------------------------INDEX.HTML--------------------------------
//post method we can insert data
//after we set up post 
//you have to add middleware to add things to your files
app.post('/api/people', (req, res) => {
  //req.body will give us access to our form values within the HTML
  const { name } = req.body
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: 'please provide name value' })
  }
  //res.status(201).json({ success: true, person: name })
  res.status(201).json({ success: true, data: [...people, name] })
})

//add data
//if there is not a name registered please ask for it
app.post('/api/postman/people', (req, res) => {
  const { name } = req.body
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: 'please provide name value' })
  }
  res.status(201).json({ success: true, data: [...people, name] })
})


//once that name value is inputed display the welcome nad inputted name
app.post('/login', (req, res) => {
  const { name } = req.body
  if (name) {
    return res.status(200).send(`Welcome ${name}`)
  }
  res.status(401).send('Please Provide Credentials')
})
//---------------------------JAVASCRIPT.HTML--------------------------------

//update method or editing the data: PUT Method; if we have a list if we wnat to edit or delete
app.put('/api/people/:id', (req, res) => {
  //get the id and the value
  const { id } = req.params
  //which item and then update the item
  const { name } = req.body

  //people array:the person id matches the number of our id
  const person = people.find((person) => person.id === Number(id))

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${id}` })
  }
  //for the person that matches the params value then we can change it
  const newPeople = people.map((person) => {
    //if person id matches to that id in params
    if (person.id === Number(id)) {
    //then it is equal to the new name (const {body} value)
      person.name = name
    }
    return person
  })
  res.status(200).json({ success: true, data: newPeople })
})

app.delete('/api/people/:id', (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id))
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${req.params.id}` })
  }

  //filter out the array if oerson.id does not match the id in the req.params.id then return that person 
  const newPeople = people.filter(
    (person) => person.id !== Number(req.params.id)
  )
  return res.status(200).json({ success: true, data: newPeople })
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
