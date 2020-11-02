import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAILURE
} from './actionTypes'
import {
  LOADING,
  SUCCESS,
  FAILURE
} from './status'
const defaultState = {
  status: LOADING
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_START:
      return { status: LOADING }
    case FETCH_SUCCESS:
      return { ...state, status: SUCCESS, ...action.result }
    case FETCH_FAILURE:
    return { status: FAILURE }
    default:
      return state
  }
}
