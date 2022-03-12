// ACTIVATE STRICT MODE //

"use strict";

// ---- HEADER, NAV & BURGER ---- //

const logoImg = document.querySelector(".logo-main");
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

// ---- CREATOR SECTION ---- //

const bgImg = document.querySelector(".bg-img");
const creatorSect = document.querySelector(".section-creator");
const creatorImgBox = document.querySelector(".bg-img-box");

// Parallax Effect

window.addEventListener("scroll", () => {
  let rate = window.pageYOffset;
  let speed = rate * 0.3 + "px";

  creatorImgBox.style.transform = `translateY(-${speed})`;
});

// ---- LOGO SECTION ---- //

const creatorSectTop = creatorSect.getBoundingClientRect().top;
// console.log(creatorSectTop);

window.addEventListener("scroll", () => {
  logoImg.classList.toggle("logoChange", window.scrollY > creatorSectTop);
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

const observerFunc = function (entries) {
  const [entry] = entries;
  console.log(entry);

  entry.target.classList.toggle("galleryAnimateIn", entry.isIntersecting);

  if (entry.isIntersecting) galleryObs.unobserve(entry.target);
};

const observerOptions = {
  root: null,
  threshold: 0.1,
  // rootMargin: "-50px",
};

const galleryObs = new IntersectionObserver(observerFunc, observerOptions);

galleryImgBox.forEach((g) => {
  galleryObs.observe(g);
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
