import { all, call, put, takeLatest } from 'redux-saga/effects'
import { clientGet } from '../api/client'
import { colorsReceived, colorsRequested, colorsRequestFailed } from '../commons/actions'
import { CallReturnType } from './sagaTypes'

/**
 * Call mock fetch colors API
 */

// FIXME: Need proper Typescript assessment/application
function* fetchColors(action: CallReturnType<typeof colorsRequested>) {
  try {
    // FIXME: proper typing for response
    const response = yield call(clientGet, `fakeApi/colors/${action.payload}`)
    const { colors } = response
    yield put(colorsReceived(colors))
  }
  catch(error) {
    yield put(colorsRequestFailed(error))
  }
}

function* watchFetchColors() {
  yield takeLatest(colorsRequested, fetchColors)
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    call(watchFetchColors)
  ])
}
