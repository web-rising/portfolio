<template>
  <div id="client">
    <div id="content" class="flex justify-center items-center cursor-pointer group border border-black rounded-sm overflow-hidden">
      <div class="w-full h-full aspect-square object-cover overflow-hidden ease-in duration-200 group-hover:scale-110">
        <img :src="require(`@/assets/clients/${image}`)" alt="" />
      </div>
      <div id="overlay" class="absolute flex flex-col justify-center z-10 items-center">
        <div class="absolute w-full h-full bg-black opacity-0 -z-10 ease-in duration-200 group-hover:opacity-60"></div>
        <div class="text-white ease-in duration-200 opacity-0 space-y-2 group-hover:opacity-100">
          <h3 class="text-2xl font-medium text-center">{{ name }}</h3>
          <h4 class="text-lg text-center">{{ details }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClientProfile',
  props: {
    name: String,
    details: String,
    image: String,
  },
}
</script>

<style scoped>
#content {
  width: 90vw;
  height: auto;
  aspect-ratio: 1/1;
}
#overlay {
  width: 90vw;
  height: auto;
  aspect-ratio: 1/1;
}

@media (min-width: 640px) {
  #content {
    width: 45vw;
    height: auto;
    aspect-ratio: 1/1;
  }
  #overlay {
    width: 45vw;
    height: auto;
    aspect-ratio: 1/1;
  }
}
@media (min-width: 768px) {
  #content {
    width: 45vw;
    height: auto;
    aspect-ratio: 1/1;
  }
  #overlay {
    width: 45vw;
    height: auto;
    aspect-ratio: 1/1;
  }
}
@media (min-width: 1024px) {
  #content {
    width: 30vw;
    height: auto;
    aspect-ratio: 1/1;
  }
  #overlay {
    width: 30vw;
    height: auto;
    aspect-ratio: 1/1;
  }
}
</style>