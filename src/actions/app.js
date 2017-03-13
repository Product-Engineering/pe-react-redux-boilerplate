import C from '../constants'
import ActionHelpers from './helpers'
import request from 'superagent'
import { batchActions } from 'redux-batched-actions'

/*
* updateApp
*/
export function updateApp (payload) {
  return {
    type: C.UPDATE_APP,
    payload
  }
}

/**
* fetchAppData
*
*/
export function fetchAppData (API_ROOT, params, callback = () => {}) {
  return (dispatch) => {
    dispatch(ActionHelpers.loadingAction(C.UPDATE_APP_STORE, 'update', 'app', 'Update app'))
    const APP_URL = `${API_ROOT}/v1/app`

    return request.put(APP_URL)
    .withCredentials()
    .query(params)
    .on('error', (err) => {
      dispatch(
        batchActions(
          ActionHelpers.errorAndClear(C.UPDATE_APP_STORE, err)
        )
      )
    })
    .end((err, response) => {
      if (err) {
        dispatch(
          batchActions(
            ActionHelpers.errorAndClear(C.UPDATE_APP_STORE, err)
          )
        )
      } else {
        dispatch(
          batchActions([
            ActionHelpers.clearLoader(C.UPDATE_APP_STORE),
            updateApp(response.body)
          ])
        )
      }
    })
  }
}
