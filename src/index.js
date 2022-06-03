import "./styles/main.scss";
import "bootstrap/scss/bootstrap.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./assets/first-left-img.png";
import "./assets/second-left-img.png";
import "./assets/third-left-img.png";
import "./assets/fourth-left-img.png";
import "./assets/first-right-img.png";
import "./assets/second-right-img.png";
import "./assets/third-right-img.png";
import "./assets/main.png";
import "./assets/logo.svg";

window.addEventListener("DOMContentLoaded", (event) => {
  const mobileNav = document.querySelector(".nav-list");
  const burgerIcon = document.querySelector(".hamburger__button");
  const navLinks = document.querySelectorAll(".nav-list__link");

  const toggleMobileNav = () => {
    mobileNav.classList.toggle("nav-list--mobile-active");
  };

  const toggleBurgerIcon = () => {
    burgerIcon.classList.toggle("hamburger--active");
  };

  burgerIcon.addEventListener("click", () => {
    toggleBurgerIcon();
    toggleMobileNav();
  });

  navLinks.forEach((link) =>
    link.addEventListener("click", () => {
      toggleBurgerIcon();
      toggleMobileNav();
    })
  );
});
