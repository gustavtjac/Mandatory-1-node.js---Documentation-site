import fs from 'fs'
import path from 'path';
import { fileURLToPath } from 'url';
import { createAllSideBarNoteOptions } from './sideBarUtil.js';
import { getAllNotes} from './notesUtil.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '../');

export function readPage(filePath) {
    const absolutePath = path.resolve(projectRoot, filePath);
    return fs.readFileSync(absolutePath, 'UTF-8').toString();
}

export function constructPage(page, note){

    const header = readPage('./public/components/header/header.html');
    const sidebar = readPage('./public/components/sidebar/sidebar.html').replace("{{notes}}", createAllSideBarNoteOptions(getAllNotes()));
   


    return page
    .replaceAll('{{header}}', header)
    .replaceAll('{{sidebar}}', sidebar)
    .replaceAll('{{noteContent}}', note || 'Note not found')

}


