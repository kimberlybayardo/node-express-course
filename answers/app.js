const { writeFile } = require("fs");
const os = require("os");
const sentence = require("./practice2");

writeFile("./content/practice.txt", sentence, (err) => {
  if (err) {
  console.log(err);
}
writeFile("./content/practice.txt", os.userInfo().username, { flag: "a"}, (err) => {
    if (err) {
      console.log(err);
    }
  });
});