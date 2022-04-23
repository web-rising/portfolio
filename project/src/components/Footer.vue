<template>
    <div class="footer">
        <div class="container">
            <div class="links">
                <h5 class="email">webrisingdev@gmail.com</h5>
                <GitButton/>
            </div>
            <ul class="nav-list">
                <li>
                    <router-link to="/mission">Our Mission</router-link>
                </li>
                <li>
                    <router-link to="/team">Our Team</router-link>
                </li>
                <li>
                    <router-link to="/work">Our Work</router-link>                
                </li>
                <li>
                    <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=webrisingdev@gmail.com">Contact Us</a>
                </li>
            </ul>
            </div>
        <h6 class="copyright">Copyright 2022 WebRising All Rights Reserved</h6>
    </div>
</template>

<script>
import GitButton from "./GitButton.vue"

export default {
    name: "wowFooter",
    components: {
        GitButton
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
  margin-left: 4rem;
}

.nav-list li a:hover {
    text-decoration: underline;
    opacity: 0.6;
}
</style>