<template>
  <div class="about">
    <div class="container">
      <section class="mission">
        <h3>Our mission.</h3>
        <div class="info">
          <div class="grid">
          <p>
            WebRising is a non-profit organization that connects volunteer high school
            developers to small businesses in need of a web-based platform to market
            their business, completely free of charge.
          </p>
          <p>
            We seek to help small businesses navigate the advent of
            web-based platforms while empowering volunteers with real-world
            experience and a greater sense of community.
          </p>
        </div>
        <div class="grid">
          <p>
            Whether you need a static website to simply showcase your business
            and display important information, or a platform to expedite sales
            — we've got you covered. Our team has the resources and technical expertise to craft a streamlined platform.
          </p>
          <p>
            Let's craft something beautiful.
          </p>
        </div>
        </div>
      </section>
      <section class="trunk" id="trunk" ref="trunkRef"></section>
      <section class="team">
        <div class="teaminfo">
          <h3>Our team.</h3>
          <p>Meet our dedicated team of designers, artists, and writers.</p>
        </div>
        <div class="profiles">
          <Profile
            v-for="(member, index) in members"
            :key="index"
            :name="member.name"
            :image1="member.image1"
            :image2="member.image2"
            :position="member.position"
            :gitlink="member.git"
            :inlink="member.in"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Profile from "../components/Profile.vue"
// import NET from 'vanta/src/vanta.net'
import TRUNK from 'vanta/src/vanta.trunk'

export default {
   name: "MissionView",
   components: {
     Profile,
   },
   mounted() {
     this.vantaEffect = TRUNK({
  el: this.$refs.trunkRef,
   mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x96455e,
  backgroundColor: 0x151515,
  spacing: 1.50,
  chaos: 2.00
  })
   },
   data() {
     return {
       members: [
         {
           name: "Christopher Heo",
           image1: "heo1.jpg",
           image2: "heo1.jpg",
           position: "Founder, CEO",
           git: "https://github.com/heochristopher",
           in: "",
         },
         {
           name: "Jason Chen",
           image: "https://i.pinimg.com/originals/ab/92/b0/ab92b0e5e7293909720321304fe2b527.png",
           position: "Co-founder, Creative Director",
           git: "https://github.com/web-rising",
           in: "",
         },
         {
           name: "Michael Chen",
           image1: "michael.jpg",
           image2: "michael.jpg",
           position: "Lead Developer",
           git: "https://github.com/Blanku-cloud",
           in: "",
         },
         {
           name: "Michael Frid",
           image: "https://i.pinimg.com/originals/ab/92/b0/ab92b0e5e7293909720321304fe2b527.png",
           position: "Lead Developer",
           git: "https://github.com/web-rising",
           in: "",
         },
         {
           name: "Johnson Wang",
           image: "https://i.pinimg.com/originals/ab/92/b0/ab92b0e5e7293909720321304fe2b527.png",
           position: "Developer",
           git: "https://github.com/web-rising",
           in: "",
         },
       ]
     }
   }
}
</script>

<style scoped>
.container {
  /* background-color: #e4c7ff; */
  background-color: #151515;
  color: #fff;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.mission {
  /* display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-around; */
  margin-top: 9rem;
  height: 60vh;
  width: 55rem;
}

.info {
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;
}

.grid {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  width: 25rem;
}

.grid p {
  padding: 1rem 0;
  font-size: 1.3rem;
}

.teaminfo p {
  font-size: 1.3rem;
}

.trunk {
  background-color: #151515;
  height: 50vh;
  width: 100%;
}

.team {
  margin-top: 2rem;
  min-height: 70vh;
  width: 100%;
}

.teaminfo {
  margin-left: 9rem;
  padding-bottom: 1rem;
}
.profiles {
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

</style>
