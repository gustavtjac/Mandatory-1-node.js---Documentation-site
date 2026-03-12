import fs from 'fs'
import { createAllSideBarNoteOptions } from './sideBarUtil.js';
import { getAllNotes, getNote} from './notesUtil.js';



export function constructPage(page, note){

    const header = readPage('./public/components/header/header.html');
    const sidebar = readPage('./public/components/sidebar/sidebar.html').replace("{{notes}}", createAllSideBarNoteOptions(getAllNotes()));
   


    return page
    .replaceAll('{{header}}', header)
    .replaceAll('{{sidebar}}', sidebar)
    .replaceAll('{{noteContent}}', note || 'Note not found')

}


export function readPage(path) {
   return fs.readFileSync(path,'UTF-8').toString();
}