<template>
    <div class="footer">
        <div class="container">
            <div class="links">
                <h5 class="email">webrising@gmail.com</h5>
                <a href="https://github.com/web-rising" class="git">
                    <img src="../assets/gitmark.png" alt="" class="mark">
                    <img src="../assets/gitlogo.png" alt="" class="logo">
                </a>
            </div>
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
        <h6 class="copyright">Copyright 2022 WebRising All Rights Reserved</h6>
    </div>
</template>

<script>
export default {
    name: "wowFooter",
}
</script>

<style scoped>
.footer {
    padding: 1.5rem 3rem;
    height: 30vh;
    width: 100%;
    overflow: hidden;
}

.container {
    display: flex;
    justify-content: space-between;
}

.git {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 8.5rem;
    height: 2.5rem;
    margin-left: 1rem;
    margin-top: 0.5rem;
    margin-bottom: 2.5rem;
}

.mark {
    height: 1.6rem;
    width: auto;
}

.logo {
    height: 2rem;
    width: auto;
}

.email {
    padding: 0 2rem;
}

.copyright {
    padding: 0 2rem;
    color: #a1a1a1;
}

.nav-list li a {
  color: #fff;
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
  margin-right: 2rem;
  margin-bottom: 5rem;
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