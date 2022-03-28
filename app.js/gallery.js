// ACTIVATE STRICT MODE //

"use strict";

// ---- GALLERY SECTION ---- //

const galleryContainer = document.querySelector(".gallery-container");
const gallerySect = document.querySelector(".section-gallery");
const galleryImgBox = document.querySelectorAll(".gallery-img-box");
const galleryImage = document.querySelectorAll(".gallery-img");
const modalContainer = document.querySelector(".modal-container");
const modalImgBox = document.querySelector(".modal-img-box");
const modalImg = document.querySelector(".modal-img");
const closeModal = document.querySelector(".far");

// Media Queries

const mediaQueryLandscape = window.matchMedia("(min-width: 1024px)");
const mediaQueryPortrait = window.matchMedia("min-width: 300px");

// Observer Callback Function

const galleryObserverFunction = function (entries) {
  const [entry] = entries;
  console.log(entry);

  if (entry.isIntersecting) {
    galleryImgBox.forEach((gb) => {
      gb.classList.toggle("galleryAnimateIn");
    });
  }

  // Animation Direction change in Landscape Mode

  if (entry.isIntersecting && mediaQueryLandscape.matches === true) {
    galleryImgBox.forEach((gb) => {
      gb.classList.toggle("galleryAnimateUp");
    });
  }

  // Stop Observer after Intersecting

  if (entry.isIntersecting) galleryObserver.unobserve(entry.target);
};

// Observer Options

const galleryObserverOptions = {
  root: null,
  threshold: 0,
  // rootMargin: "-50px",
};

// Actual Observer

const galleryObserver = new IntersectionObserver(
  galleryObserverFunction,
  galleryObserverOptions
);

galleryObserver.observe(galleryContainer);

// ---- IMAGES / MODAL ---- //

// Open Modal

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
