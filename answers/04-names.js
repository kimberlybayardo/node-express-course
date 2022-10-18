//local
const secret = 'SUPER SECRET';

//share: sharing this with the rest of our application
const john = 'John';
const peter = 'Peter';

//console.log(module)

//run node 4-names 
//exports: is an object; whatever is dumped in the exports is how you will be able to access code from outside this file
//you'll pass the exports object two properties
module.exports = {john, peter}

//all modules.exports in this file will be called when the file is called 
