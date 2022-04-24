<template>
  <div class="client">
    <img @mouseover="mouseOn" @mouseleave="mouseOff" :src="require(`@/assets/clients/${image}`)" alt="">
    <h2 v-if="hover">{{name}}</h2>
    <h6 v-if="hover">{{description}}</h6>
  </div>
</template>

<script>
export default {
    name: "coolClient",
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
        image: String,
        name: String,
        description: String,
    },
}
</script>

<style scoped>
img {
    width: 20rem;
    height: 20rem;
    object-fit: cover;
    overflow: hidden;
    margin-bottom: 1rem;
}

h2, h6 {
}

</style>