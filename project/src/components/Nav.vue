<template>
  <div :class="{ sticky: isActive }" class="nav">
    <h1>
      <router-link to="/" class="logo">WebRising</router-link>
    </h1>
    <ul class="nav-list">
      <li>
        <router-link to="/about" id="about" class="item">About Us</router-link>
      </li>
      <li>
        <router-link to="/gallery" class="item">Our Work</router-link>
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
</template>

<script>
// import gsap from "gsap"

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
  mounted() {
    // gsap.timeline({ defaults: { duration: 1 } })
    // .from(".nav", { y:-30, opacity: 0, ease: "power2.out" }, 1)
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
  padding: 1.2rem 5rem;
  /* transition: all 0.5s; */
  z-index: 3;
}

.sticky {
  background: linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  /* background-color: rgba(0, 0, 0, 0.15); */
  padding: 1.2rem 5rem;
}

.sticky .logo {
  color: #fff;
}

.sticky .nav-list li a {
  color: #fff;
}

.sticky .nav-list li a:hover {
  text-decoration: underline;
  /* opacity: 0.6; */
  color: #96455e;
}

#menu__toggle {
  display: none;
}
.menu__btn {
  display: none;
}

.logo,
.nav-list li a {
  color: #fff;
  position: relative;
  text-decoration: none;
  cursor: pointer;
  transition: 0.3s;
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
  margin-left: 5rem;
}

.nav-list li a:hover {
  text-decoration: underline;
  /* opacity: 0.6; */
  color: #96455e;
}
@media only screen and (max-width: 600px) {
}

@media only screen and (max-width: 768px) {
  .nav {
    padding-left: 2.6rem;
    padding-right: 2rem;
  }
  .nav-list li a {
    margin-left: 2rem;
  }
  #about {
    margin-right: 0;
  }
}
@media only screen and (max-width: 992px) {
  .nav {
    padding-left: 2.6rem;
  }
}
/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (max-width: 1200px) {
}

@media only screen and (max-width: 1400px) {
}
</style>
