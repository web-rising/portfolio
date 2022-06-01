<template>
  <div class="home">
    <div class="scroll"></div>
    <section class="splash" id="birds" ref="birdsRef">
      <div class="container">
        <div class="splashtext">
          <h2 class="hello">Hello.</h2>
          <h2 class="weare">We are WebRising.</h2>
        </div>
        <p class="built">
          Built by high school developers — for you, for free.
        </p>
      </div>
    </section>
    <section class="work">
      <div class="container">
        <div class="grid">
          <Client
            v-for="(client, index) in clients"
            :key="index"
            :image="client.image"
            :name="client.name"
            :description="client.description"
          />
        </div>
        <p>
          <router-link to="/gallery" class="link"
            >Check out more of our work.</router-link
          >
        </p>
      </div>
    </section>
    <section class="net" id="net" ref="netRef">
      <div class="business container">
        <h2 class="business-text">Don't limit your business's potential.</h2>
        <p class="subbus">
          Our team has the resources and technical expertise to craft a
          streamlined platform.
        </p>
      </div>
      <!-- <div class="potential container">
        <h2>Tailored to your needs.</h2>
        <p>
          Showcase your products, market your business, or sell your services.
        </p>  
      </div> -->
    </section>

    <section class="involve">
      <div class="container">
        <!-- <div class="start">
          <h2>Reach out to us to <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=webrisingdev@gmail.com" class="contact">get started</a>.</h2>
        </div> -->
        <div class="start">
          <h2 class="getinvolve">Get involved.</h2>
          <p class="getsub">
            Reach out to us to
            <a
              href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=webrisingdev@gmail.com"
              target="_blank"
              class="contact"
              >get started</a
            >.
          </p>
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
import BIRDS from "vanta/src/vanta.birds";
import NET from "vanta/src/vanta.net";
import Client from "@/components/Client.vue";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

console.log(ScrollTrigger);

export default {
  name: "HomeView",
  components: {
    Client,
  },

  mounted() {
    gsap
      .timeline({ defaults: { duration: 1 } })
      .from(".splash", { opacity: 0, ease: "power3.in" }, 0)
      .from(".hello", { y: -30, opacity: 0, ease: "power2.out" }, 0.5)
      .to(".hello", { y: 30, opacity: 0, ease: "power2.out" }, 3)
      .from(".weare", { y: -30, opacity: 0, ease: "power2.out" }, 4)
      .from(".built", { y: -20, opacity: 0, ease: "power2.out" }, 5);

    // gsap.timeline({
    //   ScrollTrigger: {
    //     trigger: ".splash",
    //     start: "top top",
    //     end: "bottom top",
    //     scrub: 1,
    //     },
    //   })
    //   .to(".hello", { y: -50, opacity: 0 }, 0)
    // gsap.set(".business", {opacity: 0, y:-10})
    // gsap.to(".potential", {
    //   scrollTrigger: {
    //     trigger: ".potential",
    //     start: "top center",
    //     scrub: 1
    //   },
    //   y: -10,
    //   opacity: 0
    // }, 0)
    // gsap.to(".business", {
    //   scrollTrigger: {
    //     trigger: ".potential",
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
      maxHeight: 200.0,
      maxWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      backgroundColor: 0x151515,
      color1: 0xb11e1e,
      color2: 0x217c91,
      birdSize: 1.2,
      wingSpan: 20.0,
      speedLimit: 3.0,
      quantity: 4.0,
    });
    this.vantaEffect = NET({
      el: this.$refs.netRef,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      maxHeight: 200.0,
      maxWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x96455e,
      backgroundColor: 0x151515,
    });
  },
  data() {
    return {
      clients: [
        {
          image: "heo1.jpg",
          name: "K-Spirit Taekwondo",
          description: "A Brooklyn Taekwondo Studio.",
        },
        {
          image: "heo1.jpg",
          name: "K-Spirit Taekwondo",
          description: "A Brooklyn Taekwondo Studio.",
        },
      ],
    };
  },
};
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
  font-size: 6rem;
}

.net {
  height: 110vh;
  width: 100%;
  overflow: visible;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.business {
  position: absolute;
  width: 75%;
}

.work {
  max-height: 120vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.involve {
  height: 60vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 5rem;
  overflow: hidden;
  /* width: 70%; */
}

.grid {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
}

.link {
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  transition: 0.3s;
  margin: 2rem 1rem;
}

.link:hover {
  color: #96455e;
  text-decoration: underline;
}

.start {
  transition: all 0.5s;
}

.start:hover .contact {
  /* text-decoration: underline; */
  color: #96455e;
}

.contact {
  cursor: pointer;
  color: #fff;
  text-decoration: none;
  transition: 0.3s;
}

.contact:hover {
  /* opacity: 0.7; */
  text-decoration: underline;
}

/* Extra small devices (phones, 600px and down) */
/* @media only screen and (min-width: 600px) {

} */
/* Small devices (portrait tablets and large phones, 600px and up) */

/* Medium devices (landscape tablets, 768px and up) */

/* Large devices (laptops/desktops, 992px and up) */

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (max-width: 992px) {
  .splashtext h2 {
    font-size: 4.5rem;
  }
  .involve {
    height: 35vh;
  }
  .business-text,
  .getinvolve {
    font-size: 3.6rem;
  }
  .net {
    height: 50rem;
  }
}
@media only screen and (max-width: 1200px) {
  .involve {
    height: 35vh;
  }
  .splashtext h2 {
    font-size: 5rem;
  }
  .business-text,
  .getinvolve {
    font-size: 3rem;
  }
}

@media only screen and (max-width: 768px) {
  .involve {
    height: 35vh;
  }
  .splashtext h2 {
    font-size: 3.5rem;
  }
  .net {
    justify-content: center;
    align-items: center;
  }
  .business-text,
  .getinvolve {
    font-size: 2rem;
    width: fit-content;
  }
  .business {
    position: none;
    text-align: center;
    width: 40rem;
  }
  .subbus,
  .getsub {
    font-size: 1.2rem;
    width: 30rem;
  }
}
@media only screen and (max-width: 600px) {
  .container {
    padding: 0 1rem;
  }
  .splashtext h2 {
    font-size: 3rem;
  }
  .built {
    font-size: 1.2rem;
  }
  .container {
    justify-content: center;
    align-items: center;
  }
  .business-text {
    font-size: 1.2rem;
    width: 38rem;
  }
  .getinvolve {
    font-size: 1.5rem;
  }
  .business {
    position: none;
    text-align: center;
  }
  .subbus {
    width: 21rem;
    font-size: 01rem;
  }

  .getsub {
    font-size: 1.2rem;
  }
}
</style>
