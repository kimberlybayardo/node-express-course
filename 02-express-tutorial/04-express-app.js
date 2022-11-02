const express = require('express')
//the path will have all the other resources within it
const path = require('path')

const app = express()

//i dont think this is needed since we are just referencing one file within the ./public folder but decided to still add it
app.use(express.static('./public'))

app.get('/', (req, res) => {
    //index html is always a root
    //__dirname: path to current directoryandpass the absolute path of the other directory we are looking for
    //you can also use path.join
  res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
})

app.all('*', (req, res) => {
  res.status(404).send('resource not found')
})

app.listen(5000, () => {
  console.log('server is listening on port 5000....')
})

