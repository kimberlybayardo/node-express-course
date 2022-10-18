//file modules: asynchronosly: not blocking or synchronosly: blocking


//writeFileSync:
const { readFileSync, writeFileSync } = require('fs')

console.log('start')

//readFileSync: it is a method: you need to provide 2 parameters: the path to the file and the encoding; generaly the coding is utf8
const first = readFileSync('./content/first.txt', 'utf8')

//writeFileSync: it is a method: 1. file name-if this is not there it will create it; if the file is already there then node will overwrite all the values in the file 2. the value
const second = readFileSync('./content/second.txt', 'utf8')
// console.log(first, second)

writeFileSync(
  './content/result-sync.txt',
  `Here is the result : ${first}, ${second}`,
//ogjects' object: a will append the value 
  { flag: 'a' }
)
console.log('done with this task')
console.log('starting the next one')
