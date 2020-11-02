import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO
} from './actionTypes'

export default (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        {
          id: action.id,
          text: action.text,
          completed: action.completed
        },
        ...state
      ]
    case TOGGLE_TODO:
      return state.map(item => ({
        ...item,
        completed: action.id === item.id ? !item.completed : item.completed
      }))
    case REMOVE_TODO:
      return state.filter(item => item.id !== action.id)
    default:
      return state
  }
}
