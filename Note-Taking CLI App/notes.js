const fs = require("fs");
const path = require("path");
const chalk = require("chalk");
const emoji = require("node-emoji");

const notesFile = path.join(__dirname, "notes.json");

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync(notesFile);
    return JSON.parse(dataBuffer.toString());
  } catch (e) {
    return [];
  }
};

const saveNotes = (notes) => {
  fs.writeFileSync(notesFile, JSON.stringify(notes, null, 2));
};

const notes = loadNotes();

const addNote = (title, body) => {
  const duplicate = notes.find((note) => {
    note.title === title;
  });

  if (duplicate) {
    console.log(chalk.red.inverse("[X] Note title already exists!"));
  } else {
    notes.push({ title, body });
    saveNotes(notes);
    console.log(chalk.green.inverse("[OK] Note added successfully!"));
  }
};

const listNotes = () => {
  if (notes.length === 0) {
    console.log(chalk.yellow("No notes found."));
  } else {
    console.log(chalk.blue.inverse("[=] Your Notes:"));
    notes.forEach((note, index) => {
      console.log(chalk.cyan(`${index + 1}. ${note.title}`));
    });
  }
};

const readNote = (title) => {
  //   console.log("Looking for title: ", title);
  //   console.log(
  //     "Available notes: ",
  //     notes.map((n) => n.title)
  //   );
  const note = notes.find((note) => {
    return note.title.toLowerCase().trim() === title.toLowerCase().trim();
  });

  if (note) {
    console.log(chalk.green.inverse("[>] Note found:"));
    console.log(chalk.bold(`Title: ${note.title}`));
    console.log(chalk.bold(`Body: ${note.body}`));
  } else {
    console.log(chalk.red.inverse("Note not found."));
  }
};

const removeNote = (title) => {
  const notesToKeep = notes.filter(
    (note) => note.title.toLowerCase().trim() != title.toLowerCase().trim()
  );

  if (notes.length > notesToKeep.length) {
    saveNotes(notesToKeep);
    console.log(chalk.green.inverse("[-] Note removed!"));
  } else {
    console.log(chalk.red.inverse("[X] No note found with that title."));
  }
};

module.exports = {
  addNote,
  listNotes,
  readNote,
  removeNote,
};
