import * as galleryJS from "./gallery.js";
import * as lineupJS from "./lineup.js";
import * as kicksJS from "./kicks.js";

// ---- HEADER, NAV & BURGER ---- //

const logoImg = document.querySelector(".logo-main");
const navMenu = document.getElementById("nav-main");
// const burger = document.getElementById("burger");
const cheese = document.getElementById("cheese");
const topBun = document.getElementById("top");
const meat = document.getElementById("meat");
const bottomBun = document.getElementById("bottom");
const navLinks = document.querySelectorAll(".nav-li");

cheese.addEventListener("click", () => {
  navMenu.classList.toggle("showNav");
  topBun.classList.toggle("topChange");
  meat.classList.toggle("meatGone");
  bottomBun.classList.toggle("bottomChange");

  if (navMenu.classList.contains("showNav")) {
    topBun.style.width = "85%";
    bottomBun.style.width = "85%";
  } else {
    topBun.style.width = "100%";
    bottomBun.style.width = "100%";
  }
});

// Close Nav Links After Click

navLinks.forEach((l) => {
  l.addEventListener("click", () => {
    navMenu.classList.remove("showNav");
    topBun.classList.remove("topChange");
    meat.classList.remove("meatGone");
    bottomBun.classList.remove("bottomChange");
    topBun.style.width = "100%";
    bottomBun.style.width = "100%";
  });
});

// ---- CREATOR SECTION ---- //

// const bgImg = document.querySelector(".bg-img");
const creatorSect = document.querySelector(".section-creator");
const creatorImgBox = document.querySelector(".bg-img-box");
const creatorImgOne = document.querySelector(".creator-img-one");
const creatorImgTwo = document.querySelector(".creator-img-two");
const creatorImgThree = document.querySelector(".creator-img-three");
const creatorImgFour = document.querySelector(".creator-img-four");
const creatorTextOne = document.querySelector(".creator-text-one");
const creatorTextTwo = document.querySelector(".creator-text-two");
const creatorTextThree = document.querySelector(".creator-text-three");
const creatorTextFour = document.querySelector(".creator-text-four");

// Parallax Effect

window.addEventListener("scroll", () => {
  let rate = window.pageYOffset;
  let speed = rate * 0.2 + "px";
  let speedFast = rate * 0.3 + "px";
  let speedFaster = rate * 0.5 + "px";
  let speedFastest = rate * 0.75 + "px";

  creatorImgBox.style.transform = `translateY(-${speed})`;
  creatorImgOne.style.transform = `translateY(-${speedFast})`;
  creatorImgTwo.style.transform = `translateY(-${speedFastest})`;
  creatorImgThree.style.transform = `translateY(-${speedFaster})`;
  creatorImgFour.style.transform = `translateY(-${speed})`;
  creatorTextOne.style.transform = `translateX(${speed})`;
  creatorTextTwo.style.transform = `translateX(-${speedFast})`;
  creatorTextThree.style.transform = `translateX(${speed})`;
  creatorTextFour.style.transform = `translateX(-${speedFastest})`;
});

// ---- LOGO SECTION ---- //

const creatorSectTop = creatorSect.getBoundingClientRect().top;
// console.log(creatorSectTop);

window.addEventListener("scroll", () => {
  logoImg.classList.toggle("logoChange", window.scrollY > creatorSectTop);
});
