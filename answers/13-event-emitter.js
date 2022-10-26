//we are getting back the class and we require the events module
//assigning it to a variable is a class
//we first listen for the event and then emit 
//ORDER MATTERS
const EventEmitter = require('events')

//we are invoking EventEmitter
//we have the class; essentially the object

const customEmitter = new EventEmitter()
//name of event (response)
//on- listen for an event
customEmitter.on('response', (name, id) => {
    console.log(`data recieved user ${name} with id:${id}`)
  })

customEmitter.on('response', () => {
  console.log('some other logic here')
})

//emit- emit the event; since the events name is reponse it will be part of the emit
customEmitter.emit('response', 'john', 34)

