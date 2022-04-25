<template>
  <div class='home'>
    <div class="scroll"></div>
    <section class="splash" id='birds' ref="birdsRef">
      <div class='container'>
        <div class="splashtext">
          <h2 class="hello">Hello.</h2>
          <h2 class="weare">We are WebRising.</h2>
        </div>
      <p class="built">Built by high school developers — for you, for free.</p>
      </div>
    </section>
     <section class='work'>
      <div class='container'>
        <Client
       v-for="(client, index) in clients"
            :key="index"
            :image="client.image"
            :name="client.name"
            :description="client.description"
        />
        <p>Check out more of our work.</p>
      </div>
    </section>
    <section class="net" id="net" ref="netRef">
      <div class="cool container">
        <h2>Don't limit your business's potential.</h2>
        <p>
          Our team has the resources and technical expertise to craft a
          streamlined platform.
        </p>  
      </div>
      <div class="potential-container">
        <h2>Tailored to your needs.</h2>
        <p>
          Showcase your products, market your business, or sell your services.
        </p>  
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
// import TRUNK from 'vanta/src/vanta.trunk'
import NET from 'vanta/src/vanta.net'
import Client from '@/components/Client.vue'

import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

console.log(ScrollTrigger)

export default {
  name: 'HomeView',
  components: {
    Client
},

mounted() {
  gsap.timeline({ defaults: { duration: 1 } })
    .from(".splash", {opacity:0, ease:"power3.in"}, 0)
    .from(".hello", { y:-30, opacity:0, ease: "power2.out"}, 0.5)
    .to(".hello", { y: 30, opacity: 0, ease: "power2.out" }, 3)
    .from(".weare", {y:-30, opacity: 0, ease: "power2.out"}, 4)
    .from(".built", {y:-20, opacity: 0, ease: "power2.out"}, 5)

  // gsap.timeline({
  //   ScrollTrigger: {
  //     trigger: ".splash",
  //     scrub: 1,
  //     },
  //   })
  //   .to(".hello", { y: -50, opacity: 0 }, 0)
  // gsap.set(".wow", {opacity: 0, y:-10})
  // gsap.to(".cool", {
  //   scrollTrigger: {
  //     trigger: ".cool",
  //     start: "top center",
  //     scrub:1
  //   },
  //   y: -10,
  //   opacity: 0
  // }, 0)
  // gsap.to(".wow", {
  //   scrollTrigger: {
  //     trigger: ".cool",
  //     start: "top center",
  //     scrub:1
  //   },
  //   y: 10,
  //   opacity: 1
  // }, 3)

  this.vantaEffect = BIRDS({
    el: this.$refs.birdsRef,
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
  this.vantaEffect = NET({
    el: this.$refs.netRef,
   mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x96455e,
  backgroundColor: 0x151515,
  // spacing: 1.50,
  // chaos: 2.00
  })
},
  data() {
    return {
      clients: [
        {
          image: "heo1.jpg",
          name: "K-Spirit Taekwondo.",
          description: "A Brooklyn Taekwondo studio."
        }
      ]
    }
  }
}
</script>

<style scoped>
/* .scroll {
  position: absolute;
  height: 200vh
} */

.splash {
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.hello {
  position: absolute;
}

.splashtext h2 {
  font-size: 5rem;
}

.net {
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.cool {
  position: absolute;
}
.work {
  height: 50vh;
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
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 0 5rem;
  overflow: hidden;
  width: 70%;
}

.start {
  transition: all 0.5s;
}

.start:hover .contact {
  text-decoration: underline;
}

.contact {
  cursor: pointer;
  color: #fff;
  text-decoration: none;
  transition: all 0.3s;
}

.contact:hover {
  opacity: 0.7;
}
</style>