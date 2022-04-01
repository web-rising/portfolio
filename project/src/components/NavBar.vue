<template>
  <head :class="{ nav: isActive }" id="nav">
    <h1 class="heady">
      <router-link to="/" class="home" :class="{ afterHome: isActive }"
        >WebRising</router-link
      >
    </h1>
    <ul class="nav-list">
      <li :class="{ li: isActive }">
        <router-link to="/about" :class="{ a: isActive }">About Us</router-link>
      </li>
      <li :class="{ li: isActive }">
        <a href="#dolor" :class="{ a: isActive }">Dolor</a>
      </li>
      <li :class="{ li: isActive }">
        <a href="#sit" :class="{ a: isActive }">Sit</a>
      </li>
      <li :class="{ li: isActive }">
        <a href="#amet" :class="{ a: isActive }">Amet</a>
      </li>
    </ul>
  </head>
</template>

<script>
export default {
  name: "NavBar",
  components: {},
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },

  methods: {
    handleScroll() {
      if (window.scrollY > 0) {
        this.isActive = true;
      } else {
        this.isActive = false;
      }
    },
    isLoad() {
      this.isActive = true;
    },
  },
  data() {
    return {
      isActive: false,
    };
  },
};
</script>

<style scoped>
.nav-list li a {
  position: relative;
  padding-left: 6rem;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.5s;
}

.nav-list .li .a {
  color: white;
}

.home,
.heady {
  background-color: rgba(0, 0, 0, 0);
  text-decoration: none;
  color: #151515;
}

.afterHome {
  color: white;
}

head {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem 5rem;
  transition: all 0.5s;
  z-index: 1;
}

.nav {
  background-color: rgba(0, 0, 0, 0.15);
  padding: 1rem 6rem;
}

div .logo,
div li a {
  color: #151515;
  position: relative;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.5s;
}
.nav-list {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav-list li {
  position: relative;
  list-style: none;
}

.nav-list li a:hover {
  color: #a1a1a1;
}

/* why is css so hard */
.nav-list li a {
  background-color: transparent;
}

div,
ul,
li {
  background-color: transparent;
}
</style>
