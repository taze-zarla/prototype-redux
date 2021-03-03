import { createReducer } from '@reduxjs/toolkit'
import {
  colorsReceived,
  colorsRequested,
  colorsRequestFailed,
  colorToggled,
} from '../../commons/actions'

export interface Color {
  id: string,
  hex: string,
  name: string,
  selected: boolean,
}

interface ColorsState {
  colors: Color[]
  status: 'idle' | 'requesting' | 'succeeded' | 'failed'
  error: string | null
}

const initialState: ColorsState = {
  colors: [],
  status: 'idle',
  error: null
}

export const colorsReducer = createReducer<ColorsState>(initialState, (builder) => {
  builder.addCase(colorToggled, (state, action) => {
    const color = state.colors.find(color => color.id === action.payload.id)

    if (color) {
      color.selected = !color.selected
    }
  })

  builder.addCase(colorsRequested, (state) => {
    state.status = 'requesting'
  })

  builder.addCase(colorsReceived, (state, action) => {
    state.colors.push(...action.payload)
    state.status = 'succeeded'
  })

  builder.addCase(colorsRequestFailed, (state, action) => {
    state.error = action.payload
    state.status = 'failed'
  })
})