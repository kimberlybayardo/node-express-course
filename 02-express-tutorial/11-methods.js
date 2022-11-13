const express = require('express')
const app = express()
let { people } = require('./data')

// static assets
//path to target all the files within that file
app.use(express.static('./methods-public'))
// parse form data; add the values to the req.body property
//express.urlencoded()- it parses incomig requests with urlencoded payloads and is based on body parser
//extended property option allows to chooe between parsing the URL-encoded data with the querystring library(when false)or the qs library (when true))
app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json())

//read data; always start with GET
app.get('/api/people', (req, res) => {
  res.status(200).json({ success: true, data: people })
})

//post method we can insert data
//after we set up post 
//you have to add middleware to add things to your files
app.post('/api/people', (req, res) => {
  //req.body will give us access to our form values
  const { name } = req.body
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: 'please provide name value' })
  }
  res.status(201).json({ success: true, person: name })
})

app.post('/api/postman/people', (req, res) => {
  const { name } = req.body
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: 'please provide name value' })
  }
  res.status(201).json({ success: true, data: [...people, name] })
})

app.post('/login', (req, res) => {
  const { name } = req.body
  if (name) {
    return res.status(200).send(`Welcome ${name}`)
  }

  res.status(401).send('Please Provide Credentials')
})

app.put('/api/people/:id', (req, res) => {
  const { id } = req.params
  const { name } = req.body

  const person = people.find((person) => person.id === Number(id))

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${id}` })
  }
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
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
  const newPeople = people.filter(
    (person) => person.id !== Number(req.params.id)
  )
  return res.status(200).json({ success: true, data: newPeople })
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
