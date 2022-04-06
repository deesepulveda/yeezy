// ACTIVATE STRICT MODE //

"use strict";

// ---- LINEUP SECTION ---- //

const shoeContainer = document.querySelector(".shoe-container");
const shoes = document.querySelectorAll(".shoes");

// Observer Callback Function

const lineupObserverFunction = function (entries) {
  const [entry] = entries;
  console.log(entry);

  if (entry.isIntersecting) {
    shoes.forEach((s) => {
      s.classList.toggle("galleryAnimateRight");
    });
  }

  // Stop Observer after Intersecting

  if (entry.isIntersecting) lineupObserver.unobserve(entry.target);
};

// Observer Options

const lineupObserverOptions = {
  root: null,
  threshold: 0,
  rootMargin: "-50px",
};

// Actual Observer

const lineupObserver = new IntersectionObserver(
  lineupObserverFunction,
  lineupObserverOptions
);

lineupObserver.observe(shoeContainer);

export * from "./lineup.js";
