//need to provide a call back
//we run a callback when we are done with the fucntionality like on the addEventListerner

const { readFile, writeFile } = require('fs')

console.log('start')

//1. provide a path and 2. call back function (error, result)
//if we dont provide the utf coding we will get a buffer. we have to add the uft code in the readFile method

//reads the values in the first and sexond .txt files and ensures that theres no error
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
//assign the result to a variable
  const first = result

  readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err)
      return
    }
//result is then assigned to this variable
    const second = result

//this will overright the values in the result-asynctxt file with the result
    writeFile(
      './content/result-async.txt',
      `Here is the result : ${first}, ${second}`,
    //the call back is (err,result)
      (err, result) => {
        if (err) {
          console.log(err)
          return
        }
        console.log('done with this task')
      }
    )
  })
})
console.log('starting next task')
