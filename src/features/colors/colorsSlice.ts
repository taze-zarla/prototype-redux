import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { client } from '../../api/client'
import { AppThunk } from '../../app/store'
import { randomHexColor } from '../../commons/randomHexColor'
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

export const fetchColors = createAsyncThunk('colors/fetchColors', async (keywords: string) => {
  const response = await client.get<{colors: Color[]}>(`/fakeApi/colors/${keywords}`)
  return response.colors
})

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
  },
  extraReducers: {
    [fetchColors.pending.type]: (state, action) => {
      state.status = 'fetching'
    },
    [fetchColors.fulfilled.type]: (state, action: PayloadAction<Color[]>) => {
      state.status = 'succeeded'
      state.colors = action.payload
    },
    [fetchColors.rejected.type]: (state, action) => { //FIXME: proper typing for action.error.message?
      state.status = 'failed'
      state.colors = action.error.message
    },
  }
})

export const { toggleColorSelected, colorAdded } = colorsSlice.actions

export const addRandomColor = (): AppThunk => async (dispatch) => {
  await sleep(5000)

  const randomColor = randomHexColor()

  dispatch(colorAdded({
    id: randomColor,
    hex: randomColor,
    name: randomColor,
    selected: false
  }))
}

export default colorsSlice.reducer