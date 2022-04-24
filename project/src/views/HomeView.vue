<template>
  <div class='home'>
    <div id='birds' ref='birdsVantaRef'></div>
    <div id='dots' ref='dotsVantaRef'></div>
    <!-- <VVanta id="vanta" effect="net" :options="this.options"></VVanta> -->
    <section class='lorem'>
      <div class='container'>
        <h2><span>Built by high school developers — </span><span>for you, for free.</span></h2>
      </div>
    </section>
    <div class='spacer waves1'></div>
    <section id='ipsum' class='ipsum'>
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
    </section>
    <div class='spacer waves3'></div>
    <section id='sit' class='sit'>
      <div class='container'>
        <h2>Our work.</h2>
        <p>Check back here shortly for our projects.</p>
      </div>
    </section>
    <div class='spacer waves4'></div>
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
            <Button>Contact Us</Button>
          </div>
          <div class='businesses'>
            <h3>For Businesses</h3>
            <p>Reach out to us to get started.</p>
            <Button>Get Started</Button>
          </div>
        </div> -->
      </div>
    </section>
    <div class='spacer waves5'></div>
  </div>
</template>

<script>
import BIRDS from 'vanta/src/vanta.birds'
// import DOTS from 'vanta/src/vanta.dots'


export default {
  name: 'HomeView',
  components: {
    // Button,
},
mounted() {
  this.vantaEffect = BIRDS({
    el: this.$refs.birdsVantaRef,
  mouseControls: false,
  touchControls: false,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  backgroundColor: 0x92141,
  color1: 0xb11e1e,
  color2: 0x217c91,
  birdSize: 1.50,
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

#birds, #dots{
  height: 50rem;
  width: 100%;
  overflow: hidden;
}

canvas {
  font-size: large;
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