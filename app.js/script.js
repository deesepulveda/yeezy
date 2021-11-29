// ACTIVATE STRICT MODE //

"use strict";

// HEADER, NAV & BURGER //

const navMenu = document.getElementById("nav-main");
const burger = document.getElementById("burger");
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
});

navLinks.forEach((l) => {
  l.addEventListener("click", () => {
    navMenu.classList.remove("showNav");
    topBun.classList.remove("topChange");
    meat.classList.remove("meatGone");
    bottomBun.classList.remove("bottomChange");
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

// GALLERY SECTION //

const lineUpSect = document.querySelector(".section-gallery");
const galleryImgBox = document.querySelectorAll(".gallery-img-box");
const galleryImage = document.querySelectorAll(".gallery-img");
const modalContainer = document.querySelector(".modal-container");
const modalImgBox = document.querySelector(".modal-img-box");
const modalImg = document.querySelector(".modal-img");
const closeModal = document.querySelector(".far");

// IMAGES / OPEN MODAL //

galleryImage.forEach((i) => {
  i.addEventListener("click", (e) => {
    const currentImages = e.currentTarget.src;
    modalImg.src = currentImages;
    modalContainer.classList.add("modalOpen");
    closeModal.style.display = "block";
  });
});

// CLOSE MODAL //

closeModal.addEventListener("click", () => {
  modalContainer.classList.remove("modalOpen");
  closeModal.style.display = "none";
});
