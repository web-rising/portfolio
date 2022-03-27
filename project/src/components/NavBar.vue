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
    components: {
        NavBar
    }
}
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
};
</style>