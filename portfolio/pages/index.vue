<template>
  <div id="home">
    <global-navbar />
    <div id="birds" class="fixed inset-0 bg-black h-screen -z-20"></div>
    <div id="overlay" class="fixed inset-0 bg-black opacity-40 h-screen -z-10"></div>
    <section class="h-screen w-full flex justify-center items-center" id="splash">
      <div id="content" class="w-5/6 max-w-4xl flex flex-col justify-center items-center px-8 space-y-4 text-white text-center">
        <h2 id="weare" class="text-6xl font-medium overflow-visible">We are WebRising.</h2>
        <p id="built" class="text-xl">Built by high school developers — for you, for free.</p>
      </div>
    </section>
    <section id="scroll" class="h-[80vh] w-full flex justify-center items-center">
      <div id="content" class="w-5/6 h-full max-w-4xl flex flex-col justify-center items-center px-8 text-white space-y-40">
        <div id="potential" class="text-center space-y-2 max-w-2xl">
          <!-- <h2 class="text-4xl font-medium overflow-visible md:text-5xl">Don't limit your potential.</h2> -->
          <p class="text-2xl overflow-hidden md:text-3xl"><span class="font-bold overflow-visible">Don't limit your potential.</span> We have the resources and technical expertise to craft your streamlined platform.</p>
        </div>
        <div id="tailored" class="text-center space-y-2 max-w-2xl">
          <!-- <h2 class="text-4xl font-medium overflow-visible md:text-5xl">Tailored to your needs.</h2> -->
          <p class="text-2xl overflow-hidden md:text-3xl"><span class="font-bold overflow-visible">Tailored to your needs.</span> Market your business, sell your products, or promote your services.</p>
        </div>
      </div>
    </section>
    <section id="projects" class="h-auto pt-40 min-h-screen w-full flex justify-center items-center px-12">
      <div id="content" class="w-full max-w-4xl flex flex-col justify-center items-center space-y-8 text-white text-center">
        <h2 class="text-5xl font-medium overflow-hidden px-8">Our clients.</h2>
        <div id="container" class="w-full overflow-hidden flex flex-row flex-wrap justify-center items-center gap-6">
          <nuxt-link to="/projects">
            <client-profile :name="'K-Spirit Taekwondo'" :details="'A Brooklyn Taekwondo Studio'" :image="'tkd.jpg'" />
          </nuxt-link>
          <nuxt-link to="/projects">
            <client-profile :name="'Ready, Set, Spike!'" :details="'NYC-based Volleyball Nonprofit'" :image="'rss.jpg'" />
          </nuxt-link>
        </div>
        <nuxt-link to="/projects" class="px-4 py-2 border border-white text-lg text-white rounded ease-in duration-200 hover:bg-white hover:text-black">
          <p>More Work</p>
        </nuxt-link>
      </div>
    </section>
    <home-section>
      <h2 class="text-6xl font-medium overflow-visible">Get started.</h2>
      <!-- <p class="text-xl">Reach out to us to get started.</p> -->
      <p class="text-xl">Let's craft something<span class="text-rose-300"> beautiful</span>.</p>
      <a id="contact" href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=team@webrising.org" target="_blank">
        <button class="px-4 py-2 border border-white text-lg text-white rounded ease-in duration-200 hover:bg-white hover:text-black">
          <p>Contact Us</p>
        </button>
      </a>
    </home-section>
    <global-footer />
  </div>
</template>

<script>
import BIRDS from 'vanta/dist/vanta.birds.min'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'Home',
  data() {
    return {}
  },
  mounted() {
    const splash = gsap.timeline({ defaults: { duration: 1 } })
    splash.from('#splash', { opacity: 0, ease: 'power3.in' }, 0)
    splash.from('#weare', { y: -30, opacity: 0, ease: 'power2.out' }, 1)
    splash.from('#built', { y: -20, opacity: 0, ease: 'power2.out' }, 2)

    const scroll = gsap.timeline({
      scrollTrigger: {
        trigger: '.scroll',
        start: 'top top',
        end: '+550px',
        scrub: 1,
      },
    })

    scroll.fromTo('#potential', { x: 800, opacity: 0 }, { x: 0, opacity: 1 }, 0.5)
    scroll.fromTo('#tailored', { x: -800, opacity: 0 }, { x: 0, opacity: 1 }, 0.5)

    const scroll2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.projects',
        start: 'top top',
        // end: "+550px",
        // scrub: 1,
      },

      defaults: { duration: 1 },
    })

    scroll2.from('#client', { y: 40, opacity: 0, ease: 'power2.out' }, 1)
    // scroll2.fromTo("#client", { y: 30, opacity: 0 }, { y: 0, opacity: 1 }, 0.5);

    this.vantaEffect = BIRDS({
      el: '#birds',
      mouseControls: false,
      touchControls: false,
      gyroControls: false,
      maxHeight: 200.0,
      maxWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      backgroundColor: 0x000,
      color1: 0xb11e1e,
      color2: 0x217c91,
      birdSize: 1.2,
      wingSpan: 20.0,
      speedLimit: 3.0,
      quantity: 4.0,
    })
  },
}
</script>
