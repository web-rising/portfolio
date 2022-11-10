<template>
  <div id="service" class="flex flex-col justify-center items-center space-y-3 w-80 m-4">
    <a :href="url" class="w-32 h-32 aspect-square object-cover overflow-hidden flex justify-center items-center">
      <img :src="require(`../assets/icons/${logo}`)" class="" alt="" id="pic" />
    </a>
    <h2 class="text-2xl text-center font-medium">{{ name }}</h2>
    <ul class="list-disc px-10 text-center space-y-2">
      <li class="" v-for="li in description" :key="li">{{ li }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Service',
  props: {
    name: String,
    logo: String,
    url: String,
    description: Array,
  },
}
</script>

<style>
</style>