/* const frontPageMainSection = document.getElementById("main-section")

renderNoteOnFrontpage("1. Welcome.md")

export function renderNoteOnFrontpage(noteName) {
    fetch('/api/notes/' + noteName)
        .then(response => response.json())
        .then(result => {
            console.log(result)
            frontPageMainSection.innerHTML = result.data
            hljs.highlightAll()
        })
} */