import { SET_FILTER } from './actionTypes'
import { filterTypes } from '@/constants'

export default (state = filterTypes.ALL, action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.filterType
    default:
      return state
  }
}
