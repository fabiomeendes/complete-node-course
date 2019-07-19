const yargs = require('yargs');
const notes = require('./notes');

yargs.version('1.1.0');

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true, // title is required
      type: 'string',
    },
    content: {
      describe: 'Note content',
      demandOption: true, // content is required
      type: 'string',
    }
  },
  handler: function(argv) {
    notes.addNote(argv.title, argv.content);
  }
});

yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true, // title is required
      type: 'string',
    },
  },
  handler: function (argv) {
    notes.removeNote(argv.title);
  }
});

yargs.command({
  command: 'list',
  describe: 'List all notes',
  handler: function () {
    console.log('Listing out all notes!');
  }
});

yargs.command({
  command: 'read',
  describe: 'Reading a note',
  handler: function () {
    console.log('Reading a note!');
  }
});

yargs.parse();