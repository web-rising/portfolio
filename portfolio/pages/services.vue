<template>
  <div id="services">
    <global-navbar />
    <section class="min-h-screen w-full flex flex-col justify-center items-center pt-32 pb-12 lg:pt-4 md:space-y-6">
      <h2 class="text-white text-5xl font-medium text-center overflow-visible">What we offer.</h2>
      <div id="services" class="flex justify-center items-start flex-row flex-wrap gap-6 overflow-visible">
        <service v-for="service in services" :key="service.name" :name="service.name" :logo="service.logo" :url="service.url" :description="service.description" />
      </div>
    </section>
    <global-footer />
  </div>
</template>

<script>
export default {
  name: 'Services',
  data() {
    return {
      services: [
        {
          name: 'E-commerce',
          logo: 'stripe.svg',
          url: 'https://stripe.com',
          description: ['Architect the e-commerce infrastructure for your business', 'We use Stripe to handle transactions'],
        },
        {
          name: 'Headless CMS',
          logo: 'prismic.svg',
          url: 'https://prismic.io',
          description: ['Upload new content on your end without touching the codebase', 'Rapid page creation with custom website builder using Prismic'],
        },
        {
          name: 'Mobile-first Design',
          logo: 'mobile.svg',
          description: ['Our design process starts with mobile interfaces', 'Sites are mobile-optimized for user experience and faster load times'],
        },
      ],
    }
  },
}
</script>