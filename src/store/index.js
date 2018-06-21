import Vuex from 'vuex';

const store = () => new Vuex.Store({
  state: {
    showPixelCount: false,
    pixelCount: 0,
    // fixBody: false,
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
    toggleFixBody(state, isFix) {
      // eslint-disable-next-line
      state.fixBody = isFix;
    },
  },
});

export default store;