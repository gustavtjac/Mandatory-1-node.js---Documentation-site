import { renderNoteOnFrontpage } from "./frontpage.js";

const sideNavBar = document.getElementById("side-nav-bar")

fetch('/api/notes')
    .then(response => {
        return response.json()
    })
    .then(result => {

        return result.data.forEach(noteName => {

            const noteOptionDiv = document.createElement("div");
            noteOptionDiv.textContent = noteName.split(".md")[0]
            noteOptionDiv.classList.add(
                "px-3", "py-2", "rounded-md", "cursor-pointer",
                "text-base", "font-medium",
                "text-gray-600", "dark:text-gray-400",
                "hover:bg-gray-100", "dark:hover:bg-gray-800",
                "hover:text-black", "dark:hover:text-white",
                "transition-colors", "duration-150",
                "border-l-2", "border-transparent",
                "hover:border-blue-400"
            );

            noteOptionDiv.addEventListener("click", function () {
                renderNoteOnFrontpage(noteName)
            });

            sideNavBar.appendChild(noteOptionDiv)


        });
    })

