let slideIndex = 0;
let slideTimer;

function showSlides() {
  const slides = document.getElementsByClassName("slides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex - 1].style.display = "block";
  slideTimer = setTimeout(showSlides, 4000); // Change image every 4 seconds
}

// Manual navigation
function plusSlides(n) {
  clearTimeout(slideTimer);
  slideIndex += n - 1;
  showSlides();
}

// Initialize slideshow on page load
document.addEventListener("DOMContentLoaded", showSlides);

// Live Current Time
function displayTime() {
  const timeElement = document.getElementById("current-time");
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  timeElement.textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(displayTime, 1000);
displayTime();

// Toggle Hamburger Menu
function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  if (navLinks.classList.contains("w3-hide-small")) {
      navLinks.classList.remove("w3-hide-small");
      navLinks.classList.add("w3-show");
  } else {
      navLinks.classList.add("w3-hide-small");
      navLinks.classList.remove("w3-show");
  }
}


