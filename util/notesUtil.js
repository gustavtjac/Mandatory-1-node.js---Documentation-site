import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

export function getNote(noteName) {
    try {
        const rawFile = fs.readFileSync(path.resolve('public/assets/notes/' + noteName), 'utf-8')
        return marked.parse(rawFile);
    } catch (err) {
        return null
    }
}

export const notesCache = new Map(
    fs.readdirSync('public/assets/notes').map(name => [parseInt(name), {
        name: name,
        note: getNote(name)
    }]) 
);

export function getAllNotes() {
    return [...notesCache.values()].map(noteObject => noteObject.name)
}



export function getNoteByNumber(number) {
    return notesCache.get(number).note;
}
