//Add the code to make this file a working express server. For the ‘/’ get request, it should return the index.html from the new-public folder. For the ‘/sample’ get request, it should just return the line “This is working.” Configure it to use port 3000. Test it by trying “localhost:3000” and “localhost:3000/sample” from your browser.
const express = require('express')
const path = require('path')

const app = express()

app.use(express.static('./new-public'))

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './new-public/index.html'))
})

app.get('/sample', (req, res) => {
    res.send('This is working')
  })

app.listen(3000, () => {
  console.log('complete')
})

