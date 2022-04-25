<template>
  <div class="work">
    <div class="container">
        <h3>Our work.</h3>
        <p>A showcase of our most recent projects.</p>
    </div>
  </div>
</template>

<script>
export default {
   name: "WorkView",
}
</script>

<style scoped>
.container {
  height: 85vh;
  background-color: #151515;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.spacer {
  aspect-ratio: 960/250;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>