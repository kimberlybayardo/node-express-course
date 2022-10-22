const http = require('http')

//req: incoming request
//res: the response
const server = http.createServer((req, res) => {
    // console.log(req)
    // res.write()
    // res.end()

    //for safari to work
    res.setHeader('content-type', 'text/html')
    if (req.url === '/') {
        res.end('Welcome to our home page')
      } else if (req.url === '/about') {
        res.end('Here is our short history')
      } else {
        res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">back home</a>
      `)}

    // if (req.url === '/') {
    //     res.end('Welcome to our home page')
    //   } else if (req.url === '/about') {
    //     res.end('Here is our short history')
    //   } else {
    //     res.end(`
    //     <h1>Oops!</h1>
    //     <p>We can't seem to find the page you are looking for</p>
    //     <a href="/">back home</a>
    //     `)
    //   }
    })
    
    server.listen(5000)