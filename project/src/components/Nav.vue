<template>
  <div :class="{ sticky: isActive }" class="nav">
    <h1>
      <router-link to="/" class="logo"
        >WebRising</router-link
      >
    </h1>
    <ul class="nav-list">
      <li>
        <router-link to="/about">About Us</router-link>
      </li>
      <li>
        <router-link to="/gallery">Our Work</router-link>
      </li>
      <li>
        <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=team@webrising.org" target="_blank">Contact Us</a>
      </li>
    </ul>
    <div class="burger">
			<img class="menu" src="../assets/menu.svg" alt="" @click="openBurger" />
		</div>
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
  mounted () {
    // gsap.timeline({ defaults: { duration: 1 } })
    // .from(".nav", { y:-30, opacity: 0, ease: "power2.out" }, 1)
  }
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
  .nav-list{
    display: none;
  }
.nav{
  justify-content: space-between;
  padding-top: 1.5rem;
 padding-right: 2rem;
 padding-left: 2rem;
}
}
@media only screen and (min-width: 601px) {
  .burger{
    display: none;
  }
} 
</style>
