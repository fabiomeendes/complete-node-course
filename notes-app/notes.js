const fs = require('fs');
const chalk = require('chalk');

const getNotes = function() {
  return 'Your notes...'
};

const addNote = function (title, content) {
  const notes = loadNotes();
  if (notes.filter(x => x.title === title).length === 0) {
    notes.push({
      title,
      content
    });
    saveNotes(notes);
    console.log(chalk.green.inverse('New note added!'));
    console.log(`Title: ${title}`);
    console.log(`Content: ${content}`);
  } else {
    console.log(chalk.red.inverse('Note already added!'));
  }
};

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
}


const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (err) {
    // console.log(err, 'error');
    return [];
  }
}

module.exports = {
  getNotes,
  addNote,
};