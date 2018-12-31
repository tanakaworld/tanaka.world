import { Module } from 'vuex'
import { combineAction, action } from 'vuex-typescript-fsa'
import {
  actionCreator,
  combineMutation,
  mutation
} from 'vuex-typescript-fsa/lib'
import { RootState } from '~/store'

export const namespace = 'vuePixel'
export interface State {
  showPixelCount: boolean
  pixelCount: number
  gameEnd: boolean
}
const initialState = (): State => {
  return {
    showPixelCount: false,
    pixelCount: 0,
    gameEnd: false
  }
}

export const ToggleMenu = actionCreator<{ flag: boolean }>('TOGGLE_MENU')
export const GameEnd = actionCreator<{ isEnd: boolean }>('GAME_END')
export const SetPixelTotal = actionCreator<{ pixelCount: number }>(
  'SET_PIXEL_TOTAL'
)
export const DecrementPixelCount = actionCreator<null>('DECREMENT_PIXEL_COUNT')

export const module: Module<State, RootState> = {
  namespaced: true,
  state: initialState,
  actions: combineAction(
    action(ToggleMenu, (context, action) => {
      context.commit(ToggleMenu(action.payload))
    }),
    action(GameEnd, (context, action) => {
      context.commit(GameEnd(action.payload))
    }),
    action(SetPixelTotal, (context, action) => {
      context.commit(SetPixelTotal(action.payload))
    }),
    action(DecrementPixelCount, (context, action) => {
      context.commit(DecrementPixelCount(action.payload))
    })
  ),
  mutations: combineMutation(
    mutation(ToggleMenu, (state, context) => {
      state.showPixelCount = context.payload.flag
    }),
    mutation(GameEnd, (state, context) => {
      state.gameEnd = context.payload.isEnd
    }),
    mutation(SetPixelTotal, (state, context) => {
      state.pixelCount = context.payload.pixelCount
    }),
    mutation(DecrementPixelCount, state => state.pixelCount--)
  ),
  getters: {
    showMenu: state => state.showPixelCount,
    pixelCount: state => state.pixelCount,
    gameEnd: state => state.gameEnd
  }
}
