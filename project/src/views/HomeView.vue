<template>
  <div class='home'>
    <section class='lorem'>
      <div class='container'>
        <h2>Built by high school developers — for you, for free.</h2>
      </div>
       <Particles id='tsparticles' :options='this.particleOptions'/>
    </section>
    <div class='spacer waves1'></div>
    <section id='ipsum' class='ipsum'>
       <Particles id='tsparticles' :options='this.particleOptions'/>
      <!-- <div class='particles' id='tsparticles2'></div> -->
      <!-- <TSParticles/> -->
      <div class='container'>
        <h2>Don't limit your business's potential.</h2>
        <p>
          Our team has the resources and technical expertise to craft a
          streamlined platform.
        </p>
      </div>
    </section>
    <div class='spacer waves2'></div>
    <section id='dolor' class='dolor'>
      <div class='container'>
        <h2>Tailored for your needs.</h2>
        <p>
          Showcase your products, market your business, and sell your services.
        </p>
      </div>
      <Particles id='tsparticles' :options='this.particleOptions'/>
    </section>
    <div class='spacer waves3'></div>
    <section id='sit' class='sit'>
      <Particles id='tsparticles' :options='this.particleOptions'/>
      <div class='container'>
        <h2>Our work.</h2>
        <p>Check back here shortly for our projects.</p>
      </div>
    </section>
    <div class='spacer waves4'></div>
    <section id='amet' class='amet'>
      <div class='container'>
        <h2>Get involved.</h2>
        <div class='divider'>
          <div class='developers'>
            <h3>For Volunteers</h3>
            <p>Help us help your community.</p>
            <Button>Contact Us</Button>
          </div>
          <div class='businesses'>
            <h3>For Businesses</h3>
            <p>Reach out to us to get started.</p>
            <Button>Get Started</Button>
          </div>
        </div>
      </div>
    <Particles id='tsparticles' :options='this.particleOptions'/>
    </section>
    <div class='spacer waves5'></div>
  </div>
</template>

<script>
// @ is an alias to /src
import Button from '@/components/Button.vue'

export default {
  name: 'HomeView',
  data() {
    return {
      particleOptions: {

  fpsLimit: 120,
  particles: {
    number: {
      value: 3,
    },
    color: {
      value: [
        '#F54900',
        '#F56416',
        '#FF8811',
        '#FFF8F0',
        '#9DD9D2',
        '#84AFB4',
        '#525A78',
        '#464569',
        '#392F5A',
        '#8F95D3',
        '#58504A',
      ],
    },
    shape: {
      type: 'circle',
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
      direction: 'top',
      outMode: 'bounce',
    },
  },
  detectRetina: !0,
  fullScreen: {
    enable: false,
  }
      }
    }
  },
  components: {
    Button,
},
}
</script>

<style scoped>

#tsparticles {
  height: 17rem;
  width: 20rem;
  overflow: hidden;
}

.home {
  background-color: #151515;
  color: #fff;
  text-align: center;
}

.lorem,
.ipsum,
.dolor,
.sit,
.amet {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 85vh;
  padding: 0 10rem;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 3rem;
  width: 50rem;
}

.lorem {
  background-color: #e4c7ff;
  color: #151515;
}

.dolor {
  background-color: #c7eeff;
  color: #151515;
}
.amet {
  background-color: #ffbdbd;
  color: #151515;
}

.divider {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.developers {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20rem;
  padding: 1rem;
}

.businesses {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20rem;
  padding: 1rem;
}

h3 {
  padding-bottom: 0.5rem;
}

.spacer {
  aspect-ratio: 960/250;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.waves1 {
  background-image: url('../assets/waves1.svg');
}

.waves2 {
  background-image: url('../assets/waves2.svg');
}

.waves3 {
  background-image: url('../assets/waves3.svg');
}

.waves4 {
  background-image: url('../assets/waves4.svg');
}

.waves5 {
  background-image: url('../assets/waves5.svg');
}
/* .particles {
  height: 17rem;
  width: 20rem;
  overflow: hidden;
} */
</style>