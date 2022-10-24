// CommonJS, every file is module (by default)
// Modules- encapsulated code (only share minimum)
// const secret = 'SUPER SECRET';
// const john = 'John';
// const peter = 'Peter';
// const sayHi =(name) => {
//     console.log(`Hello there ${name}`)
// };
//the names variable will access the module where the shareable variables are 
//you always start your module ./ depending on where the module is located then you might need to add . in order to direct the number of levels you need to go back

const names = require('./04-names')
const sayHi = require('./05-utils')
// console.log(names);
const pepperoni = require ('./06-alternative-flavor');
// console.log(pepperoni);
require('./07-mind-grenade')
sayHi('Susan');
sayHi(names.john);
sayHi(names.peter);

