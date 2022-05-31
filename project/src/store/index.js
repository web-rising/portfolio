import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    hamburgerHidden: false,
  },
  mutations: {
    openBuger(state) {
      state.hamburgerHidden = true;
    },
    closeBuger(state) {
      state.hamburgerHidden = false;
    },
  },
  actions: {
    openBuger({ commit }) {
      commit("openBuger");
    },
    closeBuger({ commit }) {
      commit("closeBuger");
    },
  },
  getters: {},
  modules: {},
});
