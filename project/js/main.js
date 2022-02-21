const tsParticles = require("tsparticles");

window.addEventListener("load", function () {
  const header = document.querySelector("header");
  header.classList.remove("nav");
});

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("nav", window.scrollY > 0);
});

tsParticles
  .loadJSON("tsparticles", "presets/default.json")
  .then((container) => {
    console.log("callback - tsparticles config loaded");
  })
  .catch((error) => {
    console.error(error);
  });
