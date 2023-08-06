const path = require('path');
const os = require('os');
const process = require('process');



// Q1 Print Out Current working document
console.log(process.cwd());


// Q2 Separator of a given file path
let separator = path.sep
console.log(separator);


// Q3 Extension Name
let extName = path.extname(__filename);
console.log(extName);


// Q4 Process Id
let userId = process.geteuid()
console.log(userId);


// Q5 User OS
let userInfo = os.userInfo()
console.log(userInfo);


// Q6 OS Platform
console.log(os.platform);