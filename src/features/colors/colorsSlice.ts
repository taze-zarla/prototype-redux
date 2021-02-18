import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { client } from '../../api/client'
import { AppThunk, RootState } from '../../app/store'
import { sleep } from '../../commons/sleep'
export interface Color {
  id: string,
  hex: string,
  name: string,
  selected: boolean,
}

interface ColorsState {
  colors: Color[]
  status: 'idle' | 'fetching' | 'succeeded' | 'failed'
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
    },
    colorAdded(state, action: PayloadAction<Color>) {
      state.colors.push(action.payload)
    }
  }
})

export const { toggleColorSelected, colorAdded } = colorsSlice.actions

export const addRandomColor = (): AppThunk => dispatch => {
  async function addRandom() {
    await sleep(5000)

    const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`

    dispatch(colorAdded({
      id: randomColor,
      hex: randomColor,
      name: randomColor,
      selected: false
    }))
  }

  addRandom()
}

export const fetchDefaultColors = createAsyncThunk('colors/fetchDefaultColors', async () => {
  const response = await client.get<{colors: Color[]}>('/fakeApi/colors')
  return response.colors
})

export const selectColors = (state: RootState) => state.colors

export default colorsSlice.reducer