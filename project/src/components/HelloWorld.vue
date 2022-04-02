<template>
  <div class="hello">
    <section class="lorem">
      <div class="container" id="container1">
        <h2 id="h21">Built by high school developers — for you, for free</h2>
      </div>
      <!-- <div class="particles" id="tsparticles"></div> -->
      <!-- <TSParticles/> -->
    </section>
    <div class="spacer waves1"></div>
    <section id="ipsum" class="ipsum">
      <!-- <div class="particles" id="tsparticles2"></div> -->
      <!-- <TSParticles/> -->
      <div class="container" id="container2">
        <h2 id="h22">Don't limit your business's potential.</h2>
        <p id="p2">
          Our team has the resources and technical expertise to craft a
          streamlined platform.
        </p>
      </div>
    </section>
    <div class="spacer waves2"></div>
    <section id="dolor" class="dolor">
      <div class="container" id="container3">
        <h2 id="h23">Tailored for your needs.</h2>
        <p id="p23">
          Showcase your products, market your business, and sell your services.
        </p>
      </div>
      <!-- <div class="particles" id="tsparticles3"></div> -->
      <!-- <TSParticles/> -->
    </section>
    <div class="spacer waves3"></div>
    <section id="sit" class="sit">
      <!-- <div class="particles" id="tsparticles4"></div> -->
      <!-- <TSParticles/> -->
      <div class="container" id="container4">
        <h2>Our work.</h2>
        <p>Check back here shortly for our projects.</p>
      </div>
    </section>
    <div class="spacer waves4"></div>
    <section id="amet" class="amet">
      <div class="container" id="container5">
        <h2 id="p25">Get involved.</h2>
        <div class="divider">
          <div class="developers">
            <h3 class="h35">For Volunteers</h3>
            <p class="p35">Help us help your community.</p>
            <Button>Contact Us</Button>
          </div>
          <div class="businesses">
            <h3 class="h35">For Businesses</h3>
            <p class="p35">Reach out to us to get started.</p>
            <Button>Get Started</Button>
          </div>
        </div>
      </div>
      <h1>hehe</h1>
      <!-- <div class="particles" id="tsparticles5"></div> -->
      <TSParticles class="test" />
      <h1>uohwoievnoi</h1>
    </section>
  </div>
</template>

<script>
import Button from "./coolButton.vue";
import TSParticles from "./TSParticles.vue";
export default {
  components: {
    Button,
    TSParticles,
  },
  name: "HelloWorld",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.test {
  width: 20rem;
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

#container1 {
  background-color: #e4c7ff;
}

#h21 {
  background-color: #e4c7ff;
  color: #151515;
}

#container3 {
  background-color: #c7eeff;
}

#h23 {
  background-color: #c7eeff;
  color: #151515;
}

#p23 {
  background-color: #c7eeff;
  color: #151515;
}

#container5,
#p25,
.divider,
.developers,
.h35,
.p35,
.businesses {
  background-color: #ffbdbd;
  color: #151515;
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

.particles {
  height: 17rem;
  width: 20rem;
  overflow: hidden;
}
</style>
