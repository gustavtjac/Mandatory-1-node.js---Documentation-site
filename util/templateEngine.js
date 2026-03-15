"use strict"
import fs from 'fs'
import { createAllSideBarNoteOptions } from './sideBarUtil.js';
import { getAllNoteNames} from './notesUtil.js';



export function constructPage(page, note) {

    const header = readPage('./public/components/header/header.html');
    const sidebar = readPage('./public/components/sidebar/sidebar.html').replace("{{notes}}", createAllSideBarNoteOptions(getAllNoteNames()));
   
    return page
    .replaceAll('{{header}}', header)
    .replaceAll('{{sidebar}}', sidebar)
    .replaceAll('{{noteContent}}', note || 'Note not written yet')

}


export function readPage(path) {
   return fs.readFileSync(path,'UTF-8').toString();
}