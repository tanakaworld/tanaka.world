import * as PixelApp from '~/store/modules/vue-pixel';

export interface RootState {
  [PixelApp.namespace]: PixelApp.State;
}
export const modules = {
  [PixelApp.namespace]: PixelApp.module,
};
