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

turtle.addEventListener("mouseover", () => {
  turtleName.style.transform = "translateY(0)";
  turtleName.style.opacity = "1";
});

turtle.addEventListener("mouseout", () => {
  turtleName.style.transform = "translateY(200%)";
  turtleName.style.opacity = "0";
});

pirate.addEventListener("mouseover", () => {
  pirateName.style.transform = "translateY(0)";
  pirateName.style.opacity = "1";
});

pirate.addEventListener("mouseout", () => {
  pirateName.style.transform = "translateY(200%)";
  pirateName.style.opacity = "0";
});

moonRock.addEventListener("mouseover", () => {
  moonRockName.style.transform = "translateY(0)";
  moonRockName.style.opacity = "1";
});

moonRock.addEventListener("mouseout", () => {
  moonRockName.style.transform = "translateY(200%)";
  moonRockName.style.opacity = "0";
});

oxfordTan.addEventListener("mouseover", () => {
  OxfordTanName.style.transform = "translateY(0)";
  OxfordTanName.style.opacity = "1";
});

oxfordTan.addEventListener("mouseout", () => {
  OxfordTanName.style.transform = "translateY(200%)";
  OxfordTanName.style.opacity = "0";
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
