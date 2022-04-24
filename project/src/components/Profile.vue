<template>
    <div class="profile">
        <img :src="image" alt="" class="pic">
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
    components: {

    },
    props: {
        name: String,
        image: String,
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