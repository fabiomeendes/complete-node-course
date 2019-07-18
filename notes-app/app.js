const fs = require('fs');

fs.writeFileSync('notes.txt', 'My name is Fábio.');

fs.appendFileSync('notes.txt', ' I live in São Paulo.', 'utf8');

// fs.appendFile('notes.txt', '\ndata to append', (err) => {
//   if (err) throw err;
//   console.log('The "data to append" was appended to file!');
// });