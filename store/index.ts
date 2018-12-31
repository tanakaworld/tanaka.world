import Vuex from 'vuex'

import * as PixelApp from '~/components/vue-pixel/store'

export interface RootState {
  [PixelApp.namespace]: PixelApp.State
}
export default () =>
  new Vuex.Store<RootState>({
    modules: {
      [PixelApp.namespace]: PixelApp.module
    }
  })
