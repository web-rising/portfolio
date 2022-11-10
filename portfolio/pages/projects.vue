<template>
  <div id="projects">
    <global-navbar />
    <section class="min-h-screen w-full justify-center items-center pt-28 pb-12 px-12 space-y-8">
      <h2 class="text-white text-5xl text-center font-medium overflow-visible">Our past projects.</h2>
      <div class="w-full overflow-visible flex flex-row flex-wrap justify-center items-center gap-6">
        <a v-for="client in clients" :key="client.name" :href="client.url" target="_blank" id="container">
          <client-profile :name="client.name" :details="client.details" :image="client.image" />
        </a>
      </div>
    </section>
    <global-footer />
  </div>
</template>

<script>
export default {
  name: 'Projects',
  data() {
    return {
      clients: [
        {
          name: 'K-Spirit Taekwondo',
          details: 'A Brooklyn Taekwondo Studio',
          image: 'tkd.jpg',
          url: 'https://kspirittkd.netlify.app',
        },
        {
          name: 'Ready, Set, Spike!',
          details: 'NYC-based Volleyball Nonprofit',
          image: 'rss.jpg',
        },
      ],
    }
  },
}
</script>