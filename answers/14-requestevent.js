const http = require('http')

// const server = http.createServer((req, res) => {
//   res.end('Welcome')
// })

// Using Event Emitter API
const server = http.createServer()
// emits request event
// subcribe to it / listen for it / respond to it
//server has the on method:look at file 13-event-emitter.js for more information
server.on('request', (req, res) => {
  res.end('Welcome')
})

server.listen(5000)
