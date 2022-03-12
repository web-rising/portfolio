import "../css/style.css";

// AOS.init();

// gsap.registerPlugin(ScrollTrigger);
// const tl = gsap.timeline({ ScrollTrigger: ".ipsum", delay: 0.5 });

// tl.from("h2", { opacity: 0, duration: 0.2 });
// tl.from("p", { opacity: 0, duration: 0.2 });

// window.addEventListener("load", function () {
//   const header = document.querySelector("header");
//   header.classList.remove("nav");
// });

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("nav", window.scrollY > 0);
});

const particleConfig = {
  fpsLimit: 120,
  particles: {
    number: {
      value: 3,
    },
    color: {
      value: ["#3998D0", "#2EB6AF", "#F45623", "#D62E32", "#EB586E", "#9952CF"],
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 0.5,
    },
    size: {
      value: 60,
      random: {
        enable: !0,
        minimumValue: 100,
      },
    },
    move: {
      enable: !0,
      speed: 1.7,
      direction: "top",
      outMode: "bounce",
    },
  },
  detectRetina: !0,
  // emitters: {
  //   direction: "top",
  //   position: {
  //     x: 50,
  //     y: 120,
  //   },
  //   rate: {
  //     delay: 0.2,
  //     quantity: 2,
  //   },
  //   size: {
  //     width: 100,
  //     height: 0,
  //   },
  // },
  fullScreen: {
    enable: false,
  },
};

tsParticles.load("tsparticles", particleConfig);
tsParticles.load("tsparticles2", particleConfig);
tsParticles.load("tsparticles3", particleConfig);
tsParticles.load("tsparticles4", particleConfig);
tsParticles.load("tsparticles5", particleConfig);
