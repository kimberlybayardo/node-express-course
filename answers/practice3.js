//create an async function called makeFile; This function should create the file ./content/practice2.txt, using asynchronous calls that return promises
//try/catch block
//Use await to get the results of each call.
//The first line, written without the append flag, should say “This is the first line.” and should end with a newline character. The next lines, each of which should end in a line end, should read “This is line 2”, then “This is line 3”, and so on up to 10.
    //these should be written in a loop with the append flag
//The catch statement should log the error, if any, to the console
//After the makeFile function declaration, add a program line that calls makeFile()

//didnt work: fs = require('fs').promises;
const { writeFile }= require('fs').promises;

async function makeFile(){
    try{
        //create this file and write this in that file
        await writeFile('./content/practice2.txt', "this is my first line\n")
        //loop that will replicate sentence 10 times. 
        for (let i = 2; i <= 10; i++){
            console.log(`Line ${i}`);
        //write file and append it to the file and add the line number
        await writeFile('./content/practice2.txt',`This is line ${i}\n`, {encoding: 'utf8', flag: "a"})
        }
//catch the error and discplay and error messge
    } catch (err) {
        console.log('error');
    }
}

makeFile();
console.log('end')
