const darkModeToggleButton = document.getElementById("theme-toggle");

  darkModeToggleButton.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
    darkModeToggleButton.textContent = document.documentElement.classList.contains("dark") ? "🌙" : "☀️";
  });