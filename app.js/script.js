// ACTIVATE STRICT MODE //

"use strict";

// ---- HEADER, NAV & BURGER ---- //

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

// ---- CREATOER SECTION ---- //

// Parallax Effect

const bgImg = document.querySelector(".bg-img");
const creatorSect = document.querySelector(".section-creator");
const creatorImgBox = document.querySelector(".bg-img-box");

// let observerOne = new IntersectionObserver((entries) => {
//   console.log(entries);
//   if (entries.intersectionRatio > 0) {
//     window.addEventListener("scroll", () => {
//       let rate = window.pageYOffset;
//       let speed = rate * 0.2 + "px";

//       entries.target.style.transform = `translateY(-${speed})`;
//     });
//   }
// });

// observerOne.observe(creatorImgBox);

window.addEventListener("scroll", () => {
  let rate = window.pageYOffset;
  let speed = rate * 0.2 + "px";

  creatorImgBox.style.transform = `translateY(-${speed})`;
});

// ---- GALLERY SECTION ---- //

const gallerySect = document.querySelector(".section-gallery");
const galleryImgBox = document.querySelectorAll(".gallery-img-box");
const galleryImage = document.querySelectorAll(".gallery-img");
const modalContainer = document.querySelector(".modal-container");
const modalImgBox = document.querySelector(".modal-img-box");
const modalImg = document.querySelector(".modal-img");
const closeModal = document.querySelector(".far");

// Animation Effect

let observer = new IntersectionObserver((entries) => {
  // console.log(entries);
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      entry.target.style.animation =
        "galleryAnimation .8s ease-in-out forwards";
    } else {
      entry.target.style.animation = "none";
    }
  });
});

galleryImgBox.forEach((box) => {
  observer.observe(box);
});

// Images / Open Modal

galleryImage.forEach((i) => {
  i.addEventListener("click", (e) => {
    const currentImages = e.currentTarget.src;
    modalImg.src = currentImages;
    modalContainer.classList.add("modalOpen");
    closeModal.style.display = "block";
  });
});

// Close Modal

closeModal.addEventListener("click", () => {
  modalContainer.classList.remove("modalOpen");
  closeModal.style.display = "none";
});
