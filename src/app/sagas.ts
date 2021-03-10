import { all, call, cancelled, put, takeLatest } from 'redux-saga/effects'
import { ApiClient } from '../api/client'
import { colorsReceived, colorsRequested, colorsRequestFailed } from '../commons/actions'
import { shuffle } from '../commons/shuffle'
import { Color } from '../features/colors/colorsReducer'
import { CallReturnType } from './sagaTypes'

/**
 * Call mock fetch colors API
 */

// FIXME: Need proper Typescript assessment/application
function* fetchColors(action: CallReturnType<typeof colorsRequested>) {
  const client = new ApiClient()
  try {
    const response: {colors: Color[]} = yield client.execute<{colors: Color[]}>(`http://localhost:4000/colors`)
    const { colors } = response
    const shuffled = shuffle<Color>(colors)
    console.log(shuffled)
    yield put(colorsReceived(shuffled.slice(0, action.payload.length)))
  }
  catch(error) {
    yield put(colorsRequestFailed(error))
  }
  finally {
    if (cancelled()) {
      client.abort()
    }
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
