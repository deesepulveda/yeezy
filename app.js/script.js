// ACTIVATE STRICT MODE
"use strict";

// HEADER //

// const header = document.querySelector(".header");
// const hero = document.querySelector(".hero");

// window.addEventListener("scroll", () => {
//   header.classList.toggle("headerChange", window.scrollY > hero.scrollHeight);
// });

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
