import { createAction } from '@reduxjs/toolkit'
import { all, call, delay, put, takeEvery } from 'redux-saga/effects'
import { randomHexColor } from '../commons/randomHexColor'
import { Color, colorAdded } from '../features/colors/colorsSlice'

export function* asyncAddRandomColor() {
  yield delay(5000)

  const randomHex = randomHexColor()

  const randomColor: Color = {
    id: randomHex,
    hex: randomHex,
    name: randomHex,
    selected: false
  }

  yield put(colorAdded(randomColor))
}

export function* watchAsyncAddRandomColor() {
  yield takeEvery('ASYNC_ADD_RANDOM_COLOR', asyncAddRandomColor)
}

export const actionAsyncAddColor = createAction<void | undefined>('ASYNC_ADD_RANDOM_COLOR')

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    call(watchAsyncAddRandomColor),
  ])
}
