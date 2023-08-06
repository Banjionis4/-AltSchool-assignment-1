const fs = require("fs");

let folder = __dirname + "/Students";

// Q1 Create Directory
fs.mkdir(folder, (err) => {
  if (err) {
    throw err;
  }
});

// Q2 Create File
let userFile = folder + "/user.js";
fs.open(userFile, "w", (err) => {
  if (err) {
    throw err;
  }
});

// Q3 Update Directory Name
let updatedFolder = __dirname + "/Names";
fs.rename(folder, updatedFolder, (err) => {
  if (err) throw err;
});

// Q4 Write File
userFile = updatedFolder + "/user.js";
fs.writeFile(userFile, `${"Name: Onifaade Olabanji"}`, (err) => {
  if (err) throw err;
});

// 5 Update File
let data = `
    Age: 23
    Sex: male
    Nationality: Nigerian
    Phone Number: 09022322751
    Hobby: gaming making friend and exploring new things
`;

fs.appendFile(userFile, data.toString(), (err) => {
  if (err) throw err;
});

// 6 Update file name
let updatedFile = __dirname + "/Names/Onifade Olabanji.js";
fs.rename(userFile, updatedFile, (err) => {
  if (err) throw err;
});

// 7 ReadFile
fs.readFile(updatedFile, (err, data) => {
  if (err) throw err;
  console.log(data);
});

// 8 Delete file
fs.unlink(updatedFile, (err) => {
  if (err) throw err;
});

// 9 Delete file
fs.rmdir(updatedFolder, (err) => {
  if (err) throw err;
});

console.log(folder);
