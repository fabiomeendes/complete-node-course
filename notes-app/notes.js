const fs = require('fs');
const chalk = require('chalk');

const getNotes = function() {
  return 'Your notes...'
};

const addNote = (title, content) => {
  const notes = loadNotes();
  if (!notes.find(x => x.title === title)) {
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



const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter(x => x.title !== title);
  if (notes.length > notesToKeep.length) {
    saveNotes(notesToKeep);
    console.log(chalk.green.inverse('Note removed!'));
    console.log(`Title: ${title}`);
  } else {
    console.log(chalk.red.inverse('Note already remove or don´t exist!'));
  }
}

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.green.inverse('Your notes'));
  return notes.map(x => {
    console.log(x.title);
  });
}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
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
  removeNote,
  listNotes,
};