<template>
  <div id="profile" class="w-full max-w-[20rem] h-[35rem] text-white overflow-hidden mx-6 my-4">
    <div id="pic-container" class="w-full h-[25rem] overflow-hidden relative">
      <img :src="require(`@/assets/profiles/${image}`)" class="w-full h-full overflow-hidden object-cover mb-4" alt="" id="pic1" />
    </div>
    <div id="container">
      <div id="person" class="w-full flex flex-col justify-center items-start">
        <h4 class="text-2xl font-semibold mt-2">{{ name }}</h4>
        <p class="text-lg mt-1">{{ position }}</p>
      </div>
      <div id="links" class="flex flex-row items-start content-start pt-4 space-x-8">
        <a id="gitmark" class="flex justify-center items-center h-8 w-8 object-cover" :href="gitlink" target="_blank">
          <img src="../assets/icons/gitmark.png" alt="" />
        </a>
        <a v-if="inlink" id="inmark" class="flex justify-center items-center h-8 w-8 object-cover" :href="inlink" target="_blank">
          <img src="../assets/icons/inmark.png" alt="" />
        </a>
        <a v-if="maillink" id="gmail" class="flex justify-center items-center h-8 w-8 object-cover" :href="`https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=${maillink}`" target="_blank"> 
          <img src="../assets/icons/gmail.png" alt="" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeamProfile',
  props: {
    name: String,
    image: String,
    position: String,
    gitlink: String,
    inlink: {
      type: String,
      required: false,
    },
    maillink: String,
  },
}
</script>