import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import postsReducer from '../features/posts/postsSlice'
import colorsReducer from '../features/colors/colorsSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer, //Not part of social media tutorial, kept for sake of counterSlice.ts not throwing error
    posts: postsReducer,
    colors: colorsReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
