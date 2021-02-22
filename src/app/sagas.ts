import { createAction } from '@reduxjs/toolkit'
import { all, call, put, takeLatest } from 'redux-saga/effects'
import { clientGet } from '../api/client'
import { CallReturnType } from './sagaTypes'

/**
 * Call mock fetch colors API
 */
export const actionFetchColors = createAction<string>('COLORS_REQUESTED')

//FIXME: Need proper Typescript assessment/application
function* fetchColors(action: CallReturnType<typeof actionFetchColors>) {
  try {
    const response = yield call(clientGet, `fakeApi/colors/${action.payload}`)
    const { colors } = response
    yield put({
      type: 'COLORS_RECEIVED',
      payload: colors
    })
  }
  catch(error) {
    yield put({ type: 'COLORS_REQUEST_FAILED', error })
  }
}

function* watchFetchColors() {
  yield takeLatest('COLORS_REQUESTED', fetchColors)
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    call(watchFetchColors)
  ])
}
