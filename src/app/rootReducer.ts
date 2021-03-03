import { combineReducers } from '@reduxjs/toolkit'
import { colorsReducer } from '../features/colors/colorsReducer'

const colors = { colors: colorsReducer }

export let rootReducer = combineReducers({
  ...colors
})

export default function createRootReducer(injectedReducers = {}) {
  rootReducer = combineReducers({
    ...colors,
    ...injectedReducers
  })

  return rootReducer
}

export type RootState = ReturnType<typeof rootReducer>