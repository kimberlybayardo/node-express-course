//build a server with HTTP module

//set up the server
// you can call it whatever you want but get  use to http
//dont have to package package .json its built in node

const http = require('http')

//set up the server
//hhtp. (object)
//for this example the object is the method create Server
//the call back will be hit eveytime the user GETs the server
//the callback has two paramters: request and respond
//the request object and the response object; in the HTTP cycle there is a request and a response
//that way we get the info that the user is trying to get the request
//respond is what were sending
//WE MUST ALWAYS USE THE REPSONSE METHOD: res.end(); this will allow the response from the server to go back to the user instead of having an ever ending loading page. 

const server = http.createServer((req, res) => {
  //console.log(req.method)
  //returns GET; user is trying to get the resources
  //req.url: provides the url/resource that the user is trying to get to
  
  const url = req.url
  // ------------------------HOME PAGE-----------------------------
  if (url === '/') {
    //method:wrtieHead: we are providing headers: we are providing META data about our response
    //method: writeHead(status code{'name of the header': 'what you want to pass'}) headers are key value pairs
    res.writeHead(200, { 'content-type': 'text/html' })
   
    //res.write is another method. you can also use it in res.end the only thing is if you do it on res.end you will always see the message in/about /contant etc
    //here is where you provide the the html code
    //this is the BODY 
    res.write('<h1>home page</h1>')
    
    //signal that the communication is over
    res.end()
  }
  // --------------------------ABOUT PAGE-------------------------------
  else if (url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write('<h1>About page</h1>')
    res.end()
  }
  // -------------------------------PAGE NOT FOUND: 404-------------------------------
  else {
    //notice that the status code is different because there is no resource
    res.writeHead(404, { 'content-type': 'text/html' })
    res.write('<h1>Page not found</h1>')
    res.end()
  }
})

//listen object: in order for the server to listen we also need to add specific as to what are we listening for
server.listen(5000)
