<template>
  <Particles
    class="particles"
    :particlesInit="particlesInit"
    :particlesLoaded="particlesLoaded"
    :options="this.options"
  />
</template>

<script>
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
