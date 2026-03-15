'use strict';
export function createAllSideBarNoteOptions(notes) {
    const sortedNotes = notes.sort((a, b) => {
        const numA = parseInt(a);
        const numB = parseInt(b);
        return numA - numB;
    });

    return sortedNotes
        .map((note) => {
            return (
                '<a href="/notes/' +
                parseInt(note.split('.md')[0]) +
                '"><div class="side-bar-option">' +
                note.split('.md')[0] +
                '</div></a>'
            );
        })
        .join('');
}
