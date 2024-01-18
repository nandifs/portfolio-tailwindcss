//Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// Hamburger Menu
const btnHamburger = document.querySelector("#btn-hamburger");
const navMenu = document.querySelector("#nav-menu");

btnHamburger.addEventListener("click", function () {
  btnHamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});
