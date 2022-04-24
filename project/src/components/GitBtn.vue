<template>
    <a class="git" :href="link" target="_blank">
        <img src="../assets/github.svg" alt="">
    </a>
</template>

<script>
export default {
    name: "GitBtn",
    props: {
        link: String,
    }
}
</script>

<style scoped>
.git {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 6.5rem;
    height: 2rem;
}
</style>