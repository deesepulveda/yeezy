// ACTIVATE STRICT MODE //

"use strict";

// ---- KICKS SECTION ---- //

const kickBox = document.querySelectorAll(".kick-box");

// Observer Callback Function

const kicksObserverFunction = function (entries) {
  const [entry] = entries;
  console.log(entry);

  entry.target.classList.toggle("kicksAnimation", entry.isIntersecting);

  // Stop Observer after Intersecting

  if (entry.isIntersecting) kicksObserver.unobserve(entry.target);
};

// Observer Options

const kicksObserverOptions = {
  root: null,
  threshold: 0,
  rootMargin: "-100px",
};

// Actual Observer

const kicksObserver = new IntersectionObserver(
  kicksObserverFunction,
  kicksObserverOptions
);

kickBox.forEach((kb) => {
  kicksObserver.observe(kb);
});
