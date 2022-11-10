<template>
  <div id="about">
    <global-navbar />
    <section id="info" class="h-auto min-h-screen w-full flex flex-col justify-center items-center space-y-6 pt-20 md:pt-4">
      <h2 class="w-3/4 text-white text-5xl text-center font-medium overflow-visible">We are WebRising.</h2>
      <div id="content" class="h-auto w-3/4 flex flex-col justify-center items-center space-y-6 md:flex-row md:items-start md:space-y-0 md:space-x-12 lg:w-2/3">
        <div id="divider" class="w-full h-full flex flex-col justify-start items-start space-y-6 text-white font-medium text-lg md:w-1/2">
          <p>WebRising is a <span class="text-rose-300"> non-profit </span> organization that connects volunteer high school developers to <span class="text-rose-300"> small local businesses </span> in need of a web-based platform to market their business, completely <span class="text-rose-300"> free of charge</span>.</p>
          <p>We seek to help small businesses navigate the advent of web-based platforms while <span class="text-rose-300"> empowering volunteers </span> with real-world experience and promoting a greater sense of <span class="text-rose-300"> community</span>.</p>
        </div>
        <div id="divider" class="w-full h-full flex flex-col justify-start items-start space-y-6 text-white font-medium text-lg md:w-1/2">
          <p>Whether you need a static website to simply <span class="text-rose-300"> showcase your business </span> and display important information, or a platform to expedite sales — <span class="text-rose-300"> we've got you covered</span>. Our team has the resources and technical expertise to craft a streamlined platform.</p>
          <p>Let's craft something<span class="text-rose-300"> beautiful</span>!</p>
        </div>
      </div>
    </section>
    <section id="team" class="h-auto min-h-screen w-full flex flex-col justify-center items-center text-white text-center space-y-4">
      <h2 class="w-3/4 text-5xl font-medium overflow-visible">Our team.</h2>
      <p class="w-3/4 text-lg">Meet our dedicated team of designers, artists, and writers.</p>
      <div id="content" class="h-auto w-5/6 flex flex-row flex-wrap justify-center items-center">
        <team-profile v-for="member in members" :key="member.name" :name="member.name" :image="member.image" :position="member.position" :gitlink="member.git" :inlink="member.in" :maillink="member.mail" />
      </div>
    </section>
    <global-footer />
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      members: [
        {
          name: 'Christopher Heo',
          image: 'heo.jpg',
          position: 'Founder, CEO',
          git: 'https://github.com/heochristopher',
          in: 'https://www.linkedin.com/in/heochristopher/',
          mail: 'christopher.heo1223@gmail.com',
        },
        {
          name: 'Jason Chen',
          image: 'jason.jpg',
          position: 'Co-founder, Creative Director',
          git: 'https://github.com/jchn3805',
          mail: 'jasonc3805@gmail.com',
        },
        {
          name: 'Michael Chen',
          image: 'michael.jpg',
          position: 'Lead Developer',
          git: 'https://github.com/Blanku-cloud',
          mail: 'pokemondinner321@gmail.com',
        },
        {
          name: 'Johnson Wang',
          image: 'johnson.jpg',
          position: 'Developer',
          git: 'https://github.com/J0hns0n-Wang',
        },
        {
          name: 'Hashir Abbasi',
          image: 'hashir.jpg',
          position: 'Developer',
          git: 'https://github.com/guardianinferno',
          mail: 'hashirabbasi112@gmail.com',
        },
      ],
    }
  },
}
</script>