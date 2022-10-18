const path = require('path')

//we are using a path module; weare going to use a seperator property with path
//this will return my platforms specific seperator
console.log(path.sep)

//.join path methos which joins a sequence of segments using that plantsforms sperator
//the second thing it does is a normalize resulting path
//
const filePath = path.join('/content/', 'subfolder', 'test.txt')
console.log(filePath)

//basename triggers the last file 
//in this case it would be test.txt
const base = path.basename(filePath)
console.log(base)

//.resolve= retunrs an absolute path; receives a sequence of path
//the absoulte path would include the absolute path to that file vs the file path would give you only partial of the path
//we will use absolute paths more frequently
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)
