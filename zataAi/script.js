// Function to toggle the sidenav visibility
function toggleNav() {
    var sidenav = document.getElementById("sidenav");
    var mainContent = document.querySelector(".main-content");
    sidenav.classList.toggle("open");
    mainContent.classList.toggle("open");
  }
  