const notes = require('./notes');
const chalk = require('chalk');

const msg = notes();
console.log(msg);

const success = chalk.green.underline.inverse;
console.log(success('Success!'));