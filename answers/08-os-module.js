//this module is built in. Ther is no need to add ./ because node wil aready know that you are looking for the built in one
const os = require('os')

// info about current user
//,userInfo is the method you are looking for
const user = os.userInfo()
console.log(user)

// method returns the system uptime in seconds
//.uptime is a method; goes up to the 100 seconds
console.log(`The System Uptime is ${os.uptime()} seconds`)

//everything after the os are methods
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}
console.log(currentOS)
