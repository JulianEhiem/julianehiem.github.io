// create an array of image sources;
"use strict";

const navToggle = document.querySelector(".menu-button");
const nav = document.querySelector("nav");
const containerAll = document.querySelector(".container-all");
const close = document.querySelector(".close");

navToggle.addEventListener("click", () => {
  containerAll.style.transition = "transform 250ms ease-in-out";
  document.body.classList.toggle("nav-is-open");
});

nav.addEventListener("click", () => {
  containerAll.style.transition = "0ms";
  document.body.classList.remove("nav-is-open");
});
