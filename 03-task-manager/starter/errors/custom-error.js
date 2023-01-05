
class CustomAPIError extends Error {
    //constrcutor method: create new class where youll pass an error emssafe and the status code of that error 
    constructor(message, statusCode) {
    //invokes a parent class and pass the message value
      super(message)
    //create a status code
      this.statusCode = statusCode
    }
  }
  
  const createCustomError = (msg, statusCode) => {
    return new CustomAPIError(msg, statusCode)
  }
  
  module.exports = { createCustomError, CustomAPIError }
  