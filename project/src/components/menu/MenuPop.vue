<template>
  <div class="hamburger" v-show="isOpenBuger">
    <div class="hamburger-container">
      <div class="vwevwe">
        <h1>
          <router-link to="/" class="logo">WebRising</router-link>
        </h1>
        <CloseMen @close-click="closeBuger" class="close" />
      </div>
      <div class="licontainter">
        <ul class="nav-list">
          <li>
            <router-link to="/about" id="about" class="item" @click="closeBuger"
              >About Us</router-link
            >
          </li>
          <li>
            <router-link to="/gallery" class="item" @click="closeBuger"
              >Our Work</router-link
            >
          </li>
          <li>
            <a
              class="item"
              href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=team@webrising.org"
              target="_blank"
              >Contact Us</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import CloseMen from "./CloseMen.vue";
export default {
  components: { CloseMen },
  name: "MenuPop",
  data() {
    return {};
  },
  methods: {
    closeBuger: function () {
      this.$store.dispatch("closeBuger");
    },
  },

  computed: {
    isOpenBuger: function () {
      return this.$store.state.hamburgerHidden;
    },
  },
};
</script>

<style scoped>
.hamburger {
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9;
}
.hamburger-container {
  background-color: #ffffff;
  position: relative;
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}

.logo {
  top: 1.3rem;
  left: 1.3rem;
  height: 4rem;
  width: fit-content;
  text-decoration: none;
  color: #151515;
  font-size: 2.5rem;
}

.vwevwe {
  display: flex;
  width: 100%;
  align-items: baseline;
  justify-content: space-between;
  padding: 1.5rem;
}

.close {
  width: 1.8rem;
}
.licontainter {
  margin: 0 auto;
}
.nav-list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.nav-list li {
  list-style: none;
  margin: 0.5rem;
}

.nav-list li a {
  color: #151515;
  position: relative;
  text-decoration: none;
  cursor: pointer;
  transition: 0.2s;
}

.nav-list li a:hover {
  /* text-decoration: underline; */
  color: red;
}
</style>
