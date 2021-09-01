const fs = require('fs');

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
};

const notes = loadNotes();
const isNoteExist = (title) => notes.find((note) => note.title === title);

const getNotes = () => {
    return 'Your notes...'
};

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
};

const addNote = (title, body) => {
    if (!isNoteExist(title)) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New note added!')
    } else {
        console.log('Note title taken!')
    }
};

const removeNote = (title) => {
    if (isNoteExist(title)) {
       saveNotes(notes.filter(note => note.title !== title));
       console.log(`The note "${title}" has been removed!`);
    } else {
        console.log(`You don't have the "${title}" note.`);
    }
}

module.exports = {
    getNotes,
    addNote,
    removeNote,
}