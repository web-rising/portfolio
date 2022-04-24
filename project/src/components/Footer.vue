<template>
    <div class="footer">
        <div class="container">
            <div class="links">
                <h5 class="email">webrisingdev@gmail.com</h5>
                <a class="git" href="https://github.com/web-rising" target="_blank">
                    <img src="../assets/github.svg" alt="">
                </a>
            </div>
            <ul class="nav-list">
                <li>
                    <router-link to="/about">About Us</router-link>
                </li>
                <li>
                    <router-link to="/gallery">Our Work</router-link>                
                </li>
                <li>
                    <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=webrisingdev@gmail.com" target="_blank">Contact Us</a>
                </li>
            </ul>
            </div>
        <h6 class="copyright">Copyright 2022 WebRising All Rights Reserved</h6>
    </div>
</template>

<script>

export default {
    name: "wowFooter",
    components: {
        
    }
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

.email {
    margin: 0 2rem;
}

.copyright {
    margin: 0 2rem;
    color: #a1a1a1;
}

.nav-list li a {
  color: #fff;
  position: relative;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s;
}

.nav-list {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 2rem;
  margin-bottom: 5.5rem;
}

.nav-list li {
  list-style: none;
}

.nav-list li a {
  margin-left: 5rem;
}

.nav-list li a:hover {
    text-decoration: underline;
    opacity: 0.6;
}

.git {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 6.5rem;
    height: 2rem;
    margin-left: 2rem;
    margin-top: 0.5rem;
    margin-bottom: 2.5rem;
    overflow: hidden;
}
</style>