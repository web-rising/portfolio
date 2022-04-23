<template>
  <div class="mission">
    <div class="container">
      <h2>Our mission.</h2>
    </div>
    <div class='spacer waves1'></div>
  </div>
</template>

<script>
export default {
   name: "MissionView",
}
</script>

<style scoped>
.container {
  height: 85vh;
  background-color: #e4c7ff;
  color: #151515;
  display: flex;
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

.waves1 {
  background-image: url('../assets/waves1.svg');
}
</style>
