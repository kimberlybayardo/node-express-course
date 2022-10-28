//equire the sentence variable from the practice2.js module. 
const sentence = require("./practice2");
//require the os module
const os = require("os");
const names = os.userInfo().username;

//require the fs module
const { writeFile } = require("fs");

const user = os.userInfo()

writeFile("./content/practice.txt", sentence, (err) => {
  if (err) {
  console.log(err);
}
writeFile("./content/practice.txt", names, { flag: "a"}, (err) => {
    if (err) {
      console.log(err);
    }
  });
  console.log(sentence);
  console.log(names);
});

