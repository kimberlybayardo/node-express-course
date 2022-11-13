const consoleLog = (req, res, next) => {
    console.log('hello')
    next();
}

module.exports = consoleLog;