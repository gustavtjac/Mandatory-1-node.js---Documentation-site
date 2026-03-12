import fs from 'fs';
import path from "path";
import { marked } from 'marked';

const notesPath = path.join(process.cwd(), "public/assets/notes");

export function getNote(noteName) {
    try {
        const rawFile = fs.readFileSync(notesPath + '/' + noteName, 'utf-8')
        return marked.parse(rawFile);
    } catch (err) {
        return null
    }
}

export const notesCache = new Map(
    fs.readdirSync(notesPath).map(name => [parseInt(name), {
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
