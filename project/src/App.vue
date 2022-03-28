<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
  components: {
    NavBar,
  },
};
</script>

<style>
/*


header.nav {
  background-color: rgba(0, 0, 0, 0.15);
  padding: 1rem 4.5rem;
}

header.nav .logo,
header.nav li a {
  color: #fff;
}

header .logo,
header li a {
  color: #151515;
}

.logo {
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
} */
</style>
