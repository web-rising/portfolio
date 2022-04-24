<template>
    <a class="linked" :href="link" target="_blank">
        <img src="../assets/linkedin.svg" alt="">
    </a>
</template>

<script>
export default {
    name: "LinkedinBtn",
    props: {
        link: String,
    }
}
</script>

<style scoped>
.linked {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 7rem;
    height: 2rem;
}
</style>