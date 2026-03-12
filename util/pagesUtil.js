import { getNoteByNumber } from './notesUtil.js';
import { readPage, constructPage } from './templateEngine.js'

const frontpage = readPage('./public/pages/frontpage/frontpage.html');

const about = readPage('./public/pages/about/about.html')

export function frontpagePage(noteNumber){
 return constructPage(frontpage, getNoteByNumber(noteNumber));
} 



 



export const aboutPage = constructPage(about);