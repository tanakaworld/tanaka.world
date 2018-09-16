import Vuex from 'vuex';

export const TOGGLE_MENU = 'TOGGLE_MENU';
export const GAME_END = 'GAME_END';

const store = () => new Vuex.Store({
  state: {
    showPixelCount: false,
    pixelCount: 0,
    fixBody: false,
    gameEnd: false
  },
  actions: {
    async [TOGGLE_MENU]({commit}, flag) {
      commit('togglePixelCount', flag);
    },
    async [GAME_END]({commit}, flag) {
      commit('toggleGameEnd', flag);
    }
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
    toggleGameEnd(state, isEnd) {
      // eslint-disable-next-line
      state.gameEnd = isEnd;
    }
  }
});

export default store;
