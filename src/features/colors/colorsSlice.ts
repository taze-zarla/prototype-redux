import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AppThunk, RootState } from "../../app/store"
import { sleep } from "../../commons/sleep"

export interface Color {
  id: string,
  hex: string,
  name: string,
  selected: boolean,
}

type ColorsState = Color[]

const initialState: ColorsState = [
  {
    id: '#ff0000',
    hex: '#ff0000',
    name: 'red',
    selected: false
  },
  {
    id: '#00ff00',
    hex: '#00ff00',
    name: 'green',
    selected: false
  },
  {
    id: '#0000ff',
    hex: '#0000ff',
    name: 'blue',
    selected: false
  },
]

export const colorsSlice = createSlice({
  name: 'colors',
  initialState,
  reducers: {
    toggleColorSelected(state, action: PayloadAction<Color>) {
      const color = state.find(color => color.id === action.payload.id)

      if (color) {
        color.selected = !color.selected
      }
    },
    colorAdded(state, action: PayloadAction<Color>) {
      state.push(action.payload)
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

export const selectColors = (state: RootState) => state.colors

export default colorsSlice.reducer