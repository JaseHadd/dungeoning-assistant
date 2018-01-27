import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  mutations: {
    // example(state, details) {
    //
    // },
  },
  getters: {
    // example_1: state => state.keys,

    // example_2: (state, mutations) => {
    //
    // }
  },
  plugins: [
    createPersistedState({
      key: 'dungeoneering'
    })
  ]
});

export default store;
