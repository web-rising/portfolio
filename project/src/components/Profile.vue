<template>
    <div class="profile">
        <div class="pic" v-if="!mobile" @mouseover="mouseOn" @mouseleave="mouseOff">
             <img v-if="!hover" :src="require(`@/assets/profiles/${image1}`)" class="pic" alt="" id="pic1">
             <img v-if="hover" :src="require(`@/assets/profiles/${image2}`)" class="pic" alt="" id="pic2">
        </div>
        <div class="pic" v-if="mobile" @click="mobileTouch">
             <img v-if="!touched" :src="require(`@/assets/profiles/${image1}`)" class="pic" alt="" id="pic1">
             <img v-if="touched" :src="require(`@/assets/profiles/${image2}`)" class="pic" alt="" id="pic2">
        </div>
        <div class="container">
            <div class="person">
                <h4>{{name}}</h4>
                <p>{{position}}</p>
            </div>
            <div class="links">
                <a class="gitmark" :href="gitlink" target="_blank">
                    <img src="../assets/gitmark.png" alt="">
                </a>
                <a class="inmark" :href="inlink" target="_blank">
                    <img src="../assets/inmark.png" alt="">
                </a>
                <a class="gmail" :href="maillink" target="_blank">
                    <img src="../assets/gmail.png" alt="">
                </a>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "TeamProfile",
    data() {
        return {
            hover: false,
            mobile: false,
            touched: false
        }
    },
    methods: {
        mouseOn() {
            setTimeout(() => {this.hover = true}, 200)
        },
        mouseOff() {
            setTimeout(() => {this.hover = false}, 100)
        },
        mobileTouch() {
            this.touched = !this.touched
        },
        isMobile(){
            if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                this.mobile = true
            }
        }
    },
    created: function() {
        this.isMobile()
    },
    props: {
        name: String,
        image1: String,
        image2: String,
        position: String,
        gitlink: String,
        inlink: String,
    }
}
</script>

<style scoped>
.profile {
    width: 20rem;
    height: 34rem;
    margin: 2rem 3rem;
    color: #fff;
    overflow: hidden;
}

.pic {
    width: 20rem;
    height: 25rem;
    object-fit: cover;
    overflow: hidden;
    margin-bottom: 1rem;
}

/* .container {
    display: flex;
    align-items: initial;
    justify-content: space-between;
} */

.links {
    display: flex;
    flex-direction: row;
    align-items: inherit;
    justify-content: inherit;
    padding-top: 1rem;
}

.gitmark {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2rem;
    width: 2rem;
    object-fit: cover;
    margin-right: 2rem;
}

.inmark {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2rem;
    width: 2rem;
    object-fit: cover;
    margin-right: 2rem;
}

.gmail {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2rem;
    width: 2rem;
    object-fit: cover;
}

h4 {
    /* padding-top: 0.5rem; */
    font-size: 1.4rem;
}

p {
    padding-top: 0.5rem;
    font-size: 1.1rem;
}
</style>