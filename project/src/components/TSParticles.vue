<template>
  <Particles
    class="particles"
    :particlesInit="particlesInit"
    :particlesLoaded="particlesLoaded"
    :options="{
      background: {
        color: {
          value: '#0d47a1',
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: 'push',
          },
          onHover: {
            enable: true,
            mode: 'repulse',
          },
          resize: true,
        },
        modes: {
          bubble: {
            distance: 400,
            duration: 2,
            opacity: 0.8,
            size: 40,
          },
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: '#ffffff',
        },
        links: {
          color: '#ffffff',
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: 'none',
          enable: true,
          outMode: 'bounce',
          random: false,
          speed: 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: 'circle',
        },
        size: {
          random: true,
          value: 5,
        },
      },
      detectRetina: true,
    }"
  />
</template>

<script>
/* import Vue from "vue";
Vue.use(Particles); */
import Particles from "particles.vue";

export default {
  data() {
    return {
      options: {
        fpsLimit: 120,
        particles: {
          number: {
            value: 3,
          },
          color: {
            value: [
              "#F54900",
              "#F56416",
              "#FF8811",
              "#FFF8F0",
              "#9DD9D2",
              "#84AFB4",
              "#525A78",
              "#464569",
              "#392F5A",
              "#8F95D3",
              "#58504A",
            ],
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
      },
    };
  },
  components: {
    Particles,
  },
  name: "TSParticles",
};
</script>

<style></style>
