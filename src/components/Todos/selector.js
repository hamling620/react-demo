import { createSelector } from 'reselect'
import { filterTypes } from '@/constants'

const getFilter = state => state.filter
const getTodos = state => state.todos

const filterTodos = createSelector(
  [getFilter, getTodos],
  (filter, todos) => {
    switch (filter) {
      case filterTypes.ALL:
        return todos
      case filterTypes.COMPLETED:
        return todos.filter(item => item.completed)
      case filterTypes.UNCOMPLETED:
        return todos.filter(item => !item.completed)
      default:
        throw new Error('unexpected filter')
    }
  }
)

export default filterTodos
