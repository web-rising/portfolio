<template>
    <div class="burger">
        <div class="container">
            <img class="menu" src="../assets/menu.svg" alt="">
            <img class="close" src="../assets/close.svg" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: "wowBurger"
}
</script>

<style scoped>
.container {
    height: 3.5rem;
    width: 3.5rem;
    border-radius: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    /* margin-left: 5rem; */
    overflow: hidden;
    cursor: pointer
}

.menu {
    position: absolute;
    height: 2rem;
    width: 2rem;
}

.close {
    position: absolute;
    height: 2.5rem;
    width: 2.5rem;
    display: none;
}
</style>