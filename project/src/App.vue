<template>
  <div id="app">
     <NavBar/>
    <router-view/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
</script>

<style>
* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #151515;
  color: #fff;
  /* min-height: 200vh; */
  scroll-behavior: smooth;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth; 
  overflow-x: hidden;
}


h1 {
  font-size: 2.5rem;
}
h2 {
  font-size: 3rem;
}
h3 {
  font-size: 1.8rem;
}
h4 {
  font-size: 1.6rem;
}
h5 {
  font-size: 1.25rem;
}

li {
  font-size: 1.1rem;
}

p {
  font-size: 1.2rem;
}

h1,
h2,
h3,
h4,
h5,
p,
li {
  text-align: center;
  font-family: "Avenir", Helvetica, sans-serif;
}
/*
header {
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
