import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vueMq from "vue-mq";

//prefix css for all
import "./assets/base.css";
Vue.config.productionTip = false;


new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

Vue.use(vueMq,{
  breakpoints:{
    phone: 480,
    tablet: 768,
    laptop: 1024,
    desktop: Infinity
  }
})
