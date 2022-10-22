const num1 = 5
const num2 = 10

//function addes values from above
function addValues() {
  console.log(`the sum is : ${num1 + num2}`)
}

//instead of setting up the exports we will just invoke the function
// you can just call the require(./7-mind-grenade) in whatever module(file) you'd like
//if we have a fucntions inside a modeule we invoke the code will run even though we didnt assign it to a variable

addValues();