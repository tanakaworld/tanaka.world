import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    showPixelCount: false,
    pixelCount: 0,
  },
  mutations: {
    setPixelCount(state, count) {
      // eslint-disable-next-line
      state.pixelCount = count;
    },
    decrementPixelCount(state) {
      // eslint-disable-next-line
      state.pixelCount--;
    },
    togglePixelCount(state, flag) {
      // eslint-disable-next-line
      state.showPixelCount = flag;
    },
  },
});

export default store;
