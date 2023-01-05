// you have to pass a paramater. We can call it whatever in this case we called it fn

const asyncWrapper = (fn) => {
    return async (req, res, next) => {
      try {
        await fn(req, res, next)
      } catch (error) {
        next(error)
      }
    }
  }
  
  module.exports = asyncWrapper
  