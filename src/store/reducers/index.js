import { combineReducers } from 'redux'
import { enableBatching } from 'redux-batched-actions'
import { AppReducer as app } from './app'
import { SidebarReducer as sidebar } from './sidebar'
import { DoctorReducer as doctor } from './doctor'
// App Reducers
import locationReducer from './location'

export const makeRootReducer = (asyncReducers) => {
  const appReducer = combineReducers({
    app,
    doctor,
    sidebar,
    location: locationReducer,
    ...asyncReducers
  })

  const resetStoreOnLogout = (state, action) => {
    /* Handle User Logout Pre Returning App Reducer */

    return appReducer(state, action)
  }

  /* returns single function to pass to create store */
  return enableBatching(resetStoreOnLogout)
}

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
