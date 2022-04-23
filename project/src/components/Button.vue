<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "coolButton",
};
</script>

<style scoped>
button {
  background-color: #987373;
  color: #fff;
  opacity: 0.6;
  font-size: 1.1rem;
  font-family: "Avenir", Helvetica, sans-serif;
  margin: 1rem;
  border: none;
  border-radius: 0.6rem;
  padding: 1rem 2rem;
  transition: all 0.3s;
}

button:hover {
  cursor: pointer;
  opacity: 0.8;
}

button:active {
  transform: scale(0.99);
}
</style>
