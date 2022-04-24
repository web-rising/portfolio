import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/gallery",
    name: "gallery",
    component: () =>
      import(/* webpackChunkName: "gallery" */ "../views/GalleryView.vue"),
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
