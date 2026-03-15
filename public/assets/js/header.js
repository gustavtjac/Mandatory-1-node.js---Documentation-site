"use strict"
const darkModeToggleButton = document.getElementById("theme-toggle");

if (localStorage.getItem("theme") === "dark") {
    document.documentElement.classList.add("dark");
    darkModeToggleButton.textContent = "🌙";
} else {
    darkModeToggleButton.textContent = "☀️";
}

darkModeToggleButton.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
    const isDark = document.documentElement.classList.contains("dark");
    darkModeToggleButton.textContent = isDark ? "🌙" : "☀️";
    localStorage.setItem("theme", isDark ? "dark" : "light");
});