<template>
  <div class='home'>
    <div class="scroll"></div>
    <section class="splash" id='birds' ref="birdRef">
      <div class='container'>
        <div class="splashtext">
          <h2 class="hello">Hello.</h2>
          <h2 class="weare">We are WebRising.</h2>
        </div>
      <p class="built">Built by high school developers — for you, for free.</p>
      </div>
    </section>
    <section class="potential">
      <div class="container">
        <h2>Don't limit your business's potential.</h2>
        <p>
          Our team has the resources and technical expertise to craft a
          streamlined platform.
        </p>  
      </div>
      <div class='container'>
        <h2>Tailored for your needs.</h2>
        <p>
          Showcase your products, market your business, or sell your services.
        </p>
      </div>
    </section>
    <!-- <section class='tailored'>
    </section> -->
    <section class='work'>
      <div class='container'>
        <p>Check out more of our work.</p>
      </div>
    </section>
    <section class='involve'>
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

  // gsap.timeline({
  //   ScrollTrigger: {
  //     trigger: ".scroll",
  //     start: "top top",
  //     end: "bottom bottom",
  //     scrub: 1,
  //     },
  //   })
  //   .fromTo(".splash", { y: 0 }, { y: -250 }, 0)

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
  speedLimit: 4.00,
  quantity: 4.00
  });
},
  data() {
    return {
    }
  }
}
</script>

<style scoped>
.scroll {
  position: absolute;
  height: 100%
}

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

.splashtext h2 {
  font-size: 5rem;
}

.potential {
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
}
.work {
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
}
.involve {
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 0 5rem;
  overflow: hidden;
  width: 70%;
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

.start {
  transition: all 0.5s;
}

.start:hover .contact {
text-decoration: underline;}

.contact {
  cursor: pointer;
  color: #fff;
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