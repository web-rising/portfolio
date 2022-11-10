<template>
    <div>
        <div id="nav" :class="{ sticky: nav }" class="fixed top-0 w-full h-20 text-white flex justify-center items-center z-40 px-6 sm:px-9 lg:h-24 lg:px-12">
            <div id="content" class="w-full h-full flex justify-between items-center">
                <div id="title" class="h-10">
                    <nuxt-link to="/">
                        <h1 class="text-3xl font-semibold mx-1 text-white overflow-visible group"><span>Web</span><span class="ease-in duration-150 group-hover:text-rose-300">Rising</span></h1>
                    </nuxt-link>
                </div>
                <ul id="links" class="hidden justify-center items-center space-x-10 text-lg text-white md:flex lg:space-x-14">
                    <li class="relative table-cell"><nuxt-link to="/about" id="underline" class="relative inline-block py-1">About Us</nuxt-link></li>
                    <li class="relative table-cell"><nuxt-link to="/projects" id="underline" class="relative inline-block py-1">Our Work</nuxt-link></li>
                    <li class="relative table-cell"><nuxt-link to="/services" id="underline" class="relative inline-block py-1">Our Services</nuxt-link></li>
                </ul>
                
                <button class="px-4 py-2 border border-rose-300 text-base text-rose-300 rounded ease-in duration-200 hover:bg-rose-300  hover:text-black hidden md:block">
                    <a id="contact" href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=team@webrising.org" target="_blank">Contact Us</a>
                </button>
                <div id="toggle" class="right-10 flex justify-center items-center xborder border-white w-12 h-12 rounded-full z-40 cursor-pointer transition duration-150 md:hidden">
                    <div id="menu-icon" @click="toggleMenu">
                        <span class="bg-white"></span>
                        <span class="bg-white"></span>
                        <span class="bg-white"></span>
                    </div>
                </div>
            </div>
        </div>

        <div id="menu" v-if="menu" class="fixed inset-0 h-screen w-full text-white text-xl z-30 pl-16 ease-in duration-200 md:hidden">
            <div id="overlay" class="absolute inset-0 w-full h-full bg-black opacity-80 -z-10"></div>
            <ul id="links" class="h-full flex flex-col justify-center items-start space-y-8 text-4xl text-white z-10">
                <li class="relative table-cell"><nuxt-link to="/about" id="underline" class="relative inline-block py-2">About Us</nuxt-link></li>
                <li class="relative table-cell"><nuxt-link to="/projects" id="underline" class="relative inline-block py-2">Our Work</nuxt-link></li>
                <li class="relative table-cell"><nuxt-link to="/services" id="underline" class="relative inline-block py-2">Our Services</nuxt-link></li>
                <li class="relative table-cell"><a id="underline" href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=team@webrising.org" target="_blank" class="relative inline-block py-2">Contact Us</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "Navbar",
    data() {
        return {
            menu: false,
            nav: false
        }
    },
    created() {
        window.addEventListener("scroll", this.scroll)
    },
    methods: {
        scroll() {
            if (window.scrollY > 0) {
                this.nav = true
            } else {
                this.nav = false
            }
        },
        toggleMenu() {
            if (document.querySelector("#menu-icon").classList.contains("open")) {
                document.querySelector("#menu-icon").classList.remove("open")
            } else {
                document.querySelector("#menu-icon").classList.add("open")
            }

            if (!this.menu) {
                this.menu = true
            } else {
                this.menu = false
            }
        }
    }

}
</script>

<style scoped>
.sticky {
    background: linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
    position: fixed;
}

#menu-icon {
  width: 25px;
  height: 20px;
  position: relative;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .5s ease-in-out;
  -moz-transition: .5s ease-in-out;
  -o-transition: .5s ease-in-out;
  transition: .5s ease-in-out;
  cursor: pointer;
}
#menu-icon span {
  display: block;
  position: absolute;
  height: 2.5px;
  width: 100%;
  border-radius: 1px;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .25s ease-in-out;
  -moz-transition: .25s ease-in-out;
  -o-transition: .25s ease-in-out;
  transition: .25s ease-in-out;
}
#menu-icon span:nth-child(1) {
  top: 0px;
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -o-transform-origin: left center;
  transform-origin: left center;
}
#menu-icon span:nth-child(2) {
  top: 8px;
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -o-transform-origin: left center;
  transform-origin: left center;
}
#menu-icon span:nth-child(3) {
  top: 16px;
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -o-transform-origin: left center;
  transform-origin: left center;
}
#menu-icon.open span:nth-child(1) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
  top: 0px;
  left: 3.8px;
}
#menu-icon.open span:nth-child(2) {
  width: 0%;
  opacity: 0;
}
#menu-icon.open span:nth-child(3) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
  top: 18px;
  left: 3.8px;
}

#underline:after {    
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: "";
  display: block;
  height: 1.5px;
  left: 50%;
  position: absolute;
  background: rgb(253 164 175);
  transition: width 0.4s ease 0s, left 0.4s ease 0s;
  width: 0;
}
#underline:hover:after { 
  width: 100%; 
  left: 0; 
}

a.nuxt-link-active {
    /* font-weight: 600; */
    color: rgb(253 164 175)
}
</style>