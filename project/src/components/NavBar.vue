<template>
  <div class="nav">
    <h1><router-link to="/">WebRising</router-link></h1>
    <ul class="nav-list">
      <li><router-link to="/about">About Us</router-link></li>
      <li><a href="#dolor">Dolor</a></li>
      <li><a href="#sit">Sit</a></li>
      <li><a href="#amet">Amet</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  components: {},
};
</script>

<style scoped>
.nav {
  background-color: rgba(0, 0, 0, 0.15);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 4rem;
  transition: all 0.5s;
  z-index: 2;
}
header.nav .logo,
header.nav li a {
  color: #fff;
}
header .logo,
header li a {
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
.nav-list li a {
  color: #151515;
  position: relative;
  padding-left: 6rem;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.5s;
}
.nav-list li a:hover {
  color: #a1a1a1;
}
</style>
