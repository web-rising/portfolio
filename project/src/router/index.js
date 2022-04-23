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
    path: "/mission",
    name: "mission",
    component: () =>
      import(/* webpackChunkName: "mission" */ "../views/MissionView.vue"),
  },
  {
    path: "/team",
    name: "team",
    component: () =>
      import(/* webpackChunkName: "team" */ "../views/TeamView.vue"),
  },
  {
    path: "/work",
    name: "work",
    component: () =>
      import(/* webpackChunkName: "work" */ "../views/WorkView.vue"),
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
