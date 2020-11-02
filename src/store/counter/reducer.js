import {
  INCREAMENT,
  DECREASE,
  GETINITVALUE
} from './actionTypes'

const defaultState = {
  first: 0,
  second: 0,
  third: 0
}

export default (state = defaultState, action) => {
  const caption = action.caption
  switch (action.type) {
    case INCREAMENT:
      return { ...state, [caption]: state[caption] + 1 }
    case DECREASE:
      if (state[caption] === 0) return state
      return { ...state, [caption]: state[caption] - 1 }
    case GETINITVALUE:
      return { ...state, ...action.value }
    default:
      return state
  }
}
