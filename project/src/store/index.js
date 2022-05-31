import { createStore } from "vuex";

export default createStore({
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
