// Exporting a function named 'responsive' to handle responsive UI behavior
export default function responsive() {
  //HERO BANNER IMAGE SWITCHING BASED ON SCREEN WIDTH

  // Selecting the image inside the hero section
  const heroImg = document.querySelector(".hero > img");

  // Function to update the hero image source based on screen width
  function updateImage() {
    if (window.innerWidth <= 768) {
      // For mobile screens
      heroImg.src = "../public/ecomherophone.png";
    } else {
      // For larger screens
      heroImg.src = "../public/ecomhero.png";
    }
  }

  updateImage(); // Run image update on initial page load

  // Run updateImage function whenever the window is resized
  window.addEventListener("resize", updateImage);

  //HAMBURGER MENU TOGGLE FOR NAVIGATION

  // Selecting the hamburger icon and navigation menu
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav ul");

  // Toggle the 'active' class on the nav menu when hamburger is clicked
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}
