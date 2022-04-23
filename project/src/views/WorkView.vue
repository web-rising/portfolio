<template>
  <div class="work">
    <div class="container">
        <h2>Our Work.</h2>
        <p>Check back here shortly for our projects.</p>
    </div>
    <div class='spacer waves5'></div>
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
  background-color: #ffbdbd;
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

.waves5 {
  background-image: url('../assets/waves5.svg');
}
</style>