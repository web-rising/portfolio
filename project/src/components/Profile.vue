<template>
    <div class="profile">
        <div class="pic-container" >
             <img :src="require(`@/assets/profiles/${image1}`)" class="pic" alt="" id="pic1">
             <img :src="require(`@/assets/profiles/${image2}`)" class="pic" alt="" id="pic2">
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
                <a v-if="inlink" class="inmark" :href="inlink" target="_blank">
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
        }
    },
    methods: {
    },
    created: function() {
    },
    props: {
        name: String,
        image1: String,
        image2: String,
        position: String,
        gitlink: String,
        inlink: {
            type: String,
            required: false
        },
        maillink: String,
    }
}
</script>

<style scoped>
*{
    transition: 0.3s;
}
 h4 {
     margin-top: 0.5rem;
 }

.profile {
    width: 20rem;
    height: 34rem;
    margin: 2rem 3rem;
    color: #fff;
    overflow: hidden;
}

.pic-container {
    width: 20rem;
    height: 25rem;
    overflow: hidden;
    position: relative;
}

.pic{
    width: 20rem;
    height: 25rem;
    object-fit: cover;
    overflow: hidden;
    margin-bottom: 1rem;
}

.pic-container #pic2 {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    object-fit: cover;
    opacity: 0;
}

.pic-container:hover #pic2{
    opacity: 1;
}

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