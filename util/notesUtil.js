import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

export function getAllNotes(){
   return fs.readdirSync(path.resolve('public/assets/notes'));
}

export function getNote(noteName) {
    try {
        const rawFile = fs.readFileSync(path.resolve('public/assets/notes/' + noteName), 'utf-8')
        return marked.parse(rawFile);
    } catch (err) {
        return null
    }
}