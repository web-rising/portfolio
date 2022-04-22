<template>
  <div :class="{ sticky: isActive }" class="nav">
    <h1>
      <router-link to="/" class="logo"
        >WebRising</router-link
      >
    </h1>
    <ul class="nav-list">
      <li>
        <router-link to="/mission">Our Mission</router-link>
      </li>
      <li>
        <router-link to="/team">Our Team</router-link>
      </li>
      <li>
        <a href="#">Our Work</a>
      </li>
      <li>
        <a href="#">Contact Us</a>
      </li>
    </ul>
  </div>
</template>

<script scoped>
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
.nav {
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

.sticky {
  background: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0));
  /* background-color: rgba(0, 0, 0, 0.15); */
  padding: 1rem 5rem;
}

.sticky .logo {
  color: #fff;
}

.sticky .nav-list li a {
  color: #fff;
}

.sticky .nav-list li a:hover {
  color: #a1a1a1;
}

.logo,
.nav-list li a {
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
  list-style: none;
}

.nav-list li a {
  margin-left: 4rem;
}

.nav-list li a:hover {
  color: #a1a1a1;
}

</style>
