import { getNoteByNumber, notesCache } from './notesUtil.js';
import { readPage, constructPage } from './templateEngine.js'

const frontpage = readPage('./public/pages/frontpage/frontpage.html');

const about = readPage('./public/pages/about/about.html')

export const aboutPage = constructPage(about);

export const notePages = new Map(
    [...notesCache.entries()]
    .map(([number, noteObject]) => [number, constructPage(frontpage, noteObject.note)])
);

export const frontpagePage = notePages.get(1);
