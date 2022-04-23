<template>
    <a href="https://github.com/web-rising" class="git" target="_blank">
        <img src="../assets/gitmark.png" alt="" class="mark">
        <img src="../assets/gitlogo.png" alt="" class="logo">
    </a>
</template>

<script>
export default {
    name: "GitButton"
}
</script>

<style scoped>
.git {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 6.5rem;
    height: 2rem;
    margin-left: 2rem;
    margin-top: 0.5rem;
    margin-bottom: 2.5rem;
}

.mark {
    height: 1.6rem;
    width: auto;
}

.logo {
    height: 2rem;
    width: auto;
}

</style>