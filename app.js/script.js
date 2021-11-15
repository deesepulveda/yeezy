// ACTIVATE STRICT MODE

"use strict";

// HEADER, NAV & BURGER

const navMenu = document.getElementById("nav-main");
const burger = document.getElementById("burger");
const cheese = document.getElementById("cheese");
const topBun = document.getElementById("top");
const meat = document.getElementById("meat");
const bottomBun = document.getElementById("bottom");

cheese.addEventListener("click", () => {
  navMenu.classList.toggle("showNav");
  topBun.classList.toggle("topChange");
  meat.classList.toggle("meatGone");
  bottomBun.classList.toggle("bottomChange");
});

const navLinks = document.querySelectorAll(".nav-li");

navLinks.forEach((l) => {
  l.addEventListener("click", () => {
    navMenu.classList.remove("showNav");
  });
});

//  SECTIONS //

const bgImg = document.querySelector(".bg-img");
const creatorSect = document.querySelector(".section-creator");

// function scrolled() {
//   window.addEventListener("scroll", () => {
//     let rate = window.pageYOffset;
//     let speed = rate + 0.05 + "px";
//     bgImg.style.transform = `translateY(-${speed})`;
//   });
// }

// if (window.scrollY > 200) {
//   console.log("It Works!");
//   window.addEventListener("scroll", () => {
//     let rate = window.pageYOffset;
//     let speed = rate + 0.05 + "px";
//     bgImg.style.transform = `translateY(-${speed})`;
//   });
// }

// LINE UP SECTION //

const turtle = document.querySelector(".turtle-img");
const pirate = document.querySelector(".pirate-img");
const moonRock = document.querySelector(".moonrock-img");
const oxfordTan = document.querySelector(".oxford-img");
const turtleName = document.querySelector(".turtle-name");
const pirateName = document.querySelector(".pirate-name");
const moonRockName = document.querySelector(".moonrock-name");
const OxfordTanName = document.querySelector(".oxford-name");

const matchingMedia = matchMedia("(min-width: 1224px)");
matchingMedia.addEventListener("change", () => {
  console.log(matchingMedia);
});

// GALLERY SECTION //

const lineUpSect = document.querySelector(".section-lineup");
const galleryImgs = document.querySelectorAll(".gallery-img-box");
const galleryImage = document.querySelectorAll(".gallery-img");

window.addEventListener("scroll", () => {
  galleryImgs.forEach((element) => {
    element.classList.add("zoomIn", window.scrollY > 2500);
  });
});
