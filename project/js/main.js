const particleConfig = {
  backgroundMask: {
    enable: true,
    cover: {
      value: {
        r: 0,
        g: 0,
        b: 0,
      },
    },
  },
  background: {
    image: "url('../public/logo.svg')",
    size: "100% 100%",
    repeat: "no-repeat",
  },
  fullScreen: {
    enable: true,
    zIndex: -1,
  },
  particles: {
    color: {
      value: ["#1E00FF", "#FF0061", "#E1FF00", "#00FF9E"],
      animation: {
        enable: true,
        speed: 30,
      },
    },
    move: {
      direction: "bottom",
      enable: true,
      outModes: {
        default: "out",
      },
      size: true,
      speed: {
        min: 1,
        max: 3,
      },
    },
    number: {
      value: 700,
      density: {
        enable: true,
        area: 800,
      },
    },
    opacity: {
      value: 1,
      animation: {
        enable: false,
        startValue: "max",
        destroy: "min",
        speed: 0.3,
        sync: true,
      },
    },
    rotate: {
      value: {
        min: 0,
        max: 360,
      },
      direction: "random",
      move: true,
      animation: {
        enable: true,
        speed: 60,
      },
    },
    tilt: {
      direction: "random",
      enable: true,
      move: true,
      value: {
        min: 0,
        max: 360,
      },
      animation: {
        enable: true,
        speed: 60,
      },
    },
    shape: {
      type: ["circle", "square", "polygon"],
      options: {
        polygon: [
          {
            sides: 5,
          },
          {
            sides: 6,
          },
        ],
      },
    },
    size: {
      value: {
        min: 3,
        max: 5,
      },
    },
    roll: {
      darken: {
        enable: true,
        value: 30,
      },
      enlighten: {
        enable: true,
        value: 30,
      },
      enable: true,
      speed: {
        min: 15,
        max: 25,
      },
    },
    wobble: {
      distance: 30,
      enable: true,
      move: true,
      speed: {
        min: -15,
        max: 15,
      },
    },
  },
};

tsParticles.load("tsparticles", particleConfig, function () {
  console.log("particles loaded");
});

const particleConfig = {
  fpsLimit: 120,
  particles: {
    number: {
      value: 2,
    },
    color: {
      value: [
        "#3998D0",
        "#2EB6AF",
        "#A9BD33",
        "#FEC73B",
        "#F89930",
        "#F45623",
        "#D62E32",
        "#EB586E",
        "#9952CF",
      ],
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 0.5,
    },
    size: {
      value: 5,
      random: {
        enable: !0,
        minimumValue: 200,
      },
    },
    move: {
      enable: !0,
      speed: 5,
      direction: "top",
      // outMode: "destroy",
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

tsParticles.load("tsparticles", particleConfig, function () {
  console.log("particles loaded");
});
tsParticles.load("tsparticles2", particleConfig, function () {
  console.log("particles loaded");
});
tsParticles.load("tsparticles3", particleConfig, function () {
  console.log("particles loaded");
});
tsParticles.load("tsparticles4", particleConfig, function () {
  console.log("particles loaded");
});
tsParticles.load("tsparticles5", particleConfig, function () {
  console.log("particles loaded");
});
