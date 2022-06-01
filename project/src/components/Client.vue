<template>
  <div class="client">
    <div class="pic">
      <img :src="require(`@/assets/clients/${image}`)" alt="" />
      <div class="mask">
        <h4>{{ name }}</h4>
        <h5>{{ description }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "coolClient",
  data() {
    return {};
  },
  methods: {},
  props: {
    image: String,
    name: String,
    description: String,
  },
};
</script>

<style scoped>
/* * {
    transition: 0.3s;
} */

.pic {
  display: flex;
  flex-direction: column;
  align-items: center;
  object-fit: cover;
  justify-content: center;
  margin: 1rem;
  overflow: hidden;
  position: relative;
}

.pic:hover .mask {
  opacity: 1;
}

.pic:hover img {
  transform: scale(1.1);
}

h4,
h5 {
  color: #fff;
}

img {
  width: 35rem;
  height: 35rem;
  object-fit: cover;
  overflow: hidden;
  transition: 0.3s;
}
.mask {
  width: 35rem;
  height: 35rem;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 1;
  opacity: 0;
  transition: 0.3s;
}

@media only screen and (max-width: 992px) {
  img {
    width: 28rem;
    height: 35rem;
  }
  .mask {
    width: 28rem;
    height: 35rem;
  }
}

@media only screen and (max-width: 768px) {
  .container {
    padding-left: 5rem !important;
  }
  img {
    width: 25rem;
    height: 30rem;
  }
  .mask {
    width: 25rem;
    height: 30rem;
  }
}

@media only screen and (max-width: 600px) {
  img {
    width: 20rem;
    height: 25rem;
  }
  .mask {
    width: 20rem;
    height: 25rem;
  }
}

@media only screen and (max-width: 1200px) {
}

@media only screen and (max-width: 1400px) {
}
</style>
