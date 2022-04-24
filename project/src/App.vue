<template>
  <div id="app">
    <Nav />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import Footer from "./components/Footer.vue"

export default {
  components: {
    Nav,
    Footer,
  },
  mounted() {
    window.onbeforeunload = () => {
      window.scrollTo(0, 0);
    };
  },
}
</script>

<style></style>
