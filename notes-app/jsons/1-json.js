const fs = require('fs');

// const book = {
//   title: 'Harry Potter 11',
//   author: 'Fabio Mendes',
// }

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJSON);

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title);

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);

data.name = 'Fábio'
data.age = '20'

const dataJSONResult = JSON.stringify(data);
fs.writeFileSync('1-json.json', dataJSONResult);
