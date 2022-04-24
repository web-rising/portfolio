<template>
  <div class='home'>
    <section class="splash" id='birds' ref="birdRef">
      <div class='container'>
        <div class="splashtext">
          <h2 class="hello">Hello.</h2>
          <h2 class="weare">We are WebRising.</h2>
        </div>
      <p class="built">Built by high school developers — for you, for free.</p>
      </div>
    </section>
    <!-- <VVanta id="vanta" effect="net" :options="this.options"></VVanta> -->
    <section class='lorem'>
      <div class='container'>
        <h2><span>Built by high school developers — </span><span>for you, for free.</span></h2>
      </div>
    </section>
    <section id='ipsum' class='ipsum'>
      <div class='container'>
        <h2>Don't limit your business's potential.</h2>
        <p>
          Our team has the resources and technical expertise to craft a
          streamlined platform.
        </p>
      </div>
    </section>
    <section id='dolor' class='dolor'>
      <div class='container'>
        <h2>Tailored for your needs.</h2>
        <p>
          Showcase your products, market your business, and sell your services.
        </p>
      </div>
    </section>
    <section id='sit' class='sit'>
      <div class='container'>
        <h2>Our work.</h2>
        <p>Check back here shortly for our projects.</p>
      </div>
    </section>
    <section id='amet' class='amet'>
      <div class='container'>
        <!-- <div class="start">
          <h2>Reach out to us to <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=webrisingdev@gmail.com" class="contact">get started</a>.</h2>
        </div> -->
        <div class="start">
          <h2>Get involved.</h2>
          <p>Reach out to us to <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=webrisingdev@gmail.com" target="_blank" class="contact">get started</a>.</p>
        </div>
        <!-- <div class='divider'>
          <div class='developers'>
            <h3>For Volunteers</h3>
            <p>Help us help your community.</p>
          </div>
          <div class='businesses'>
            <h3>For Businesses</h3>
            <p>Reach out to us to get started.</p>
          </div>
        </div> -->
      </div>
    </section>
  </div>
</template>

<script>
import BIRDS from 'vanta/src/vanta.birds'
// import DOTS from 'vanta/src/vanta.dots'

import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'HomeView',
  components: {
},

mounted() {
  gsap.timeline({ defaults: { duration: 1 } })
    // .from("hello", { y:-50, opacity:0, ease: "power2.out"}, 1)
    .to(".hello", { y: 50, opacity: 0, ease: "power1.out" }, 3)
    .from(".weare", {y:-50, opacity: 0, ease: "power1.out"}, 4)
    .from(".built", {y:-20, opacity: 0, ease: "power2.out"}, 5)

  this.vantaEffect = BIRDS({
    el: this.$refs.birdRef,
  mouseControls: false,
  touchControls: false,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  backgroundColor: 0x151515,
  color1: 0xb11e1e,
  color2: 0x217c91,
  birdSize: 1.20,
  wingSpan: 20.00,
  speedLimit: 3.00,
  quantity: 4.00
  })
  // this.vantaEffect = DOTS({
  //   el: this.$refs.dotsVantaRef,
  //  mouseControls: true,
  // touchControls: true,
  // gyroControls: false,
  // minHeight: 200.00,
  // minWidth: 200.00,
  // scale: 1.00,
  // scaleMobile: 1.00,
  // color: 0xfa3e7e,
  // backgroundColor: 0x160e28
  // })
},
  data() {
    return {
    }
  }
}
</script>

<style scoped>

/* #birds, #dots{
  height: 50rem; */
.splash {
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
}

.hello {
  position: absolute;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding: 0 5rem;
  overflow: hidden;
  /* width: 50rem; */
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

.start {
  transition: all 0.5s;
}

.start:hover .contact {
text-decoration: underline;}

.contact {
  cursor: pointer;
  color: #151515;
  text-decoration: none;
  transition: all 0.3s;
}

.contact:hover {
  opacity: 0.7;
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