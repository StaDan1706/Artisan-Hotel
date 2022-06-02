import "./styles/main.scss";
import mainBackgroundImg from "./assets/main.png";
import artisanLogoImg from "./assets/logo.svg";
import firstLeftImg from "./assets/first-left-img.png";
import secondLeftImg from "./assets/second-left-img.png";
import thirdLeftImg from "./assets/third-left-img.png";
import fourthLeftImg from "./assets/fourth-left-img.png";
import firstRightImg from "./assets/first-right-img.png";
import secondRightImg from "./assets/second-right-img.png";
import thirdRightImg from "./assets/third-right-img.png";

const background = document.getElementById("home-background-img");
background.src = mainBackgroundImg;

const headerLogo = document.getElementById("home-logo-img");
headerLogo.src = artisanLogoImg;

const firstLeft = document.getElementById("first-left-img");
firstLeft.src = firstLeftImg;

const secondLeft = document.getElementById("second-left-img");
secondLeft.src = secondLeftImg;

const thirdLeft = document.getElementById("third-left-img");
thirdLeft.src = thirdLeftImg;

const fourthLeft = document.getElementById("fourth-left-img");
fourthLeft.src = fourthLeftImg;

const firstRight = document.getElementById("first-right-img");
firstRight.src = firstRightImg;

const secondRight = document.getElementById("second-right-img");
secondRight.src = secondRightImg;

const thirdRight = document.getElementById("third-right-img");
thirdRight.src = thirdRightImg;

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
