import * as PixelApp from '~/components/vue-pixel/store';

export interface RootState {
  [PixelApp.namespace]: PixelApp.State;
}
export const modules = {
  [PixelApp.namespace]: PixelApp.module
};
