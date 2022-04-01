import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Particles from "particles.vue";

//prefix css for all
import "./assets/base.css";
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

Vue.use(Particles);
