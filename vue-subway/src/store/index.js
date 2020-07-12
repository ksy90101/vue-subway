import Vue from "vue";
import Vuex from "vuex";
import { lines } from "../constract/SubwayMockData";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    stations: [],
    lines: lines,
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    getLines: (state) => {
      return state.lines;
    },
  },
});
