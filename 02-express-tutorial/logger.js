//middleware function
//when you are working with middleware you must send it to the next middleware unless you are terminating it
const logger = (req, res, next) => {
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url, time)
  //res.send('testing');
  //passing it to the next function which would be the app.gt functions
    next()
  }

  module.exports = logger