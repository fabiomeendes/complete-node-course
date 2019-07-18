const notes = require('./notes');
const validator = require('validator');

const msg = notes();
console.log(msg);

console.log(validator.isEmail('fabiocamillo@outlook.com'));