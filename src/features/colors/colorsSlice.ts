import { createSlice, PayloadAction } from '@reduxjs/toolkit'

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

export const colorsSlice = createSlice({
  name: 'colors',
  initialState,
  reducers: {
    toggleColorSelected(state, action: PayloadAction<Color>) {
      const color = state.colors.find(color => color.id === action.payload.id)

      if (color) {
        color.selected = !color.selected
      }
    }
  },
  extraReducers: {
    /**
     * TODO: apply best practice for 'STUFF_HAPPENED': (S, A) => {...}
     * for saga-related actions.
     * Most probably should be [actionVariable.type]: (S, A) => {...}
     */
    'COLORS_REQUESTED': (state, action) => {
      state.status = 'requesting'
    },
    'COLORS_RECEIVED': (state, action: PayloadAction<Color[]>) => {
      state.colors.push(...action.payload)
      state.status = 'succeeded'
    },
    'COLORS_REQUEST_FAILED': (state, action) => {//FIXME: proper typing for action?
      state.error = action.error
      state.status = 'failed'
    },
  }
})

export const { toggleColorSelected } = colorsSlice.actions

export default colorsSlice.reducer