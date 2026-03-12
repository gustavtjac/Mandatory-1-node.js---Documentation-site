/* import { renderNoteOnFrontpage } from "./frontpage.js";

const sideNavBar = document.getElementById("side-nav-bar")

fetch('/api/notes')
    .then(response => {
        return response.json()
    })
    .then(result => {

        const sortedData = result.data.sort((a, b) => {
            const numA = parseInt(a);
            const numB = parseInt(b);
            return numA - numB;
        });

        return sortedData.forEach(noteName => {

            const noteOptionDiv = document.createElement("div");
            noteOptionDiv.textContent = noteName.split(".md")[0]
            noteOptionDiv.classList.add("side-bar-option")
            noteOptionDiv.classList.add(
                
            );

            noteOptionDiv.addEventListener("click", function () {
                renderNoteOnFrontpage(noteName)
            });

            sideNavBar.appendChild(noteOptionDiv)


        });
    })

 */