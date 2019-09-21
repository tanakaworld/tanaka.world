import * as PixelApp from '~/store/moduels/vue-pixel';

export interface RootState {
  [PixelApp.namespace]: PixelApp.State;
}
export const modules = {
  [PixelApp.namespace]: PixelApp.module
};
