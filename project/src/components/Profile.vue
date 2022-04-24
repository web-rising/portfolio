<template>
    <div class="profile">
        <img :src="image" alt="" class="pic">
        <h4>{{name}}</h4>
        <p>{{position}}</p>
        <div class="links">
            <GitBtn/>
            <LinkedinBtn/>
        </div>
    </div>
</template>

<script>
import GitBtn from "./GitBtn.vue"
import LinkedinBtn from "./LinkedinBtn.vue"

export default {
    name: "TeamProfile",
    components: {
        GitBtn,
        LinkedinBtn
    },
    props: {
        name: String,
        image: String,
        position: String
    }
}
</script>

<style scoped>
.profile {
    width: 20rem;
    height: 33rem;
    margin: 2rem 3rem;
    background-color: #151515;
    color: #fff;
    overflow: hidden;
}

.pic {
    width: 20rem;
    height: 25rem;
    object-fit: cover;
    margin-bottom: 1rem;
}

.links {
    display: flex;
    flex-direction: row;
    align-items: inherit;
    justify-content: inherit;
    padding: 0.5rem 0;
}

.git {
    width: 5.5rem;
    margin-right: 2rem;
}

.linked {
    width: 5.8rem;
}

h4 {
    padding: 0.4rem 0;
    font-size: 1.4rem;
}

p {
    font-size: 1.1rem;
}
</style>