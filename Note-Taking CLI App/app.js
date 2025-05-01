const figlet = require("figlet");
const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes");

figlet("NOTES APP", (err, data) => {
  if (!err) {
    console.log(chalk.blue(data));
  } else {
    console.log(chalk.red("Banner failed to load."));
  }
});

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argsv) {
    notes.addNote(argsv.title, argsv.body);
  },
});

yargs.command({
  command: "list",
  describe: "List all notes",
  handler() {
    notes.listNotes();
  },
});

yargs.command({
  command: "read",
  describe: "Read a note by title",
  builder: {
    title: {
      describe: "Title of the note to read",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNote(argv.title);
  },
});

yargs.command({
  command: "remove",
  describe: "Remove a note by title",
  builder: {
    title: {
      describe: "Title of the note to remove",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

yargs.parse();
