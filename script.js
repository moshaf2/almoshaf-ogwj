function startSite() {
  document.getElementById("welcome-screen").style.display = "none";
  document.getElementById("main-content").style.display = "block";
}

function toggleDarkMode() {
  document.body.classList.toggle("dark");
}
