/**
 * Plan reducer
 *
 * @param {String} email
 * @param {String} intercom_id
 * @param {String} mailchimp_id
 * @param {Object} preferences
 * @api public
 */

import C from '../../constants'
import Immutable from 'immutable'
import { createReducer } from '../../utils'
import helpers from './helpers'

const initialState = Immutable.fromJS({
  isLoading: false,
  note: null,
  data: []
})

const internals = {
  /**
   * UPDATE_DOCTOR_STORE
   *
   * @param {Object} payload
   *  @param {Bool} isLoading
   *  @param {Object} error
   * @api public
   */
  [C.UPDATE_DOCTOR_STORE]: (state, payload) => {
    return state.merge(Immutable.fromJS(payload))
  },
  /**
   * SET_DOCTORS
   *
   * @param {Object} payload - array of doctors
   * @api public
   */
  [C.SET_DOCTORS]: (state, payload) => {
    return helpers.setIn(state, ['data'], 'id', payload)
  }
}

const DoctorReducer = createReducer(initialState, internals)

module.exports.DoctorReducer = DoctorReducer
module.exports.internals = internals
