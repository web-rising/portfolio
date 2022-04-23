<template>
  <div class="team">
    <div class="container">
      <h2>Our team.</h2>
      <p>Work in progress...</p>

    </div>
    <div class='spacer waves3'></div>
  </div>
</template>

<script>
export default {
   name: "TeamView",
}
</script>

<style scoped>
.container {
  height: 85vh;
  background-color: #c7eeff;
  color: #151515;
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

.waves3 {
  background-image: url('../assets/waves3.svg');
}
</style>