import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'
import { connect } from 'react-redux'
import { toggleTodo, removeTodo } from '@/store/todo/actions'
import { filterTypes } from '@/constants'

const filterTodos = (todos, filter) => {
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

@connect(state => ({
  todos: filterTodos(state.todos, state.filter)
}), {
  toggleTodo,
  removeTodo
})
class TodoList extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired
  }
  render () {
    const { todos, toggleTodo, removeTodo } = this.props
    return (
      <ul>
        {
          todos.map(item => (
            <TodoItem
              key={ item.id }
              text={ item.text }
              completed={ item.completed }
              onToggle={ () => toggleTodo(item.id) }
              onRemove={ () => removeTodo(item.id) }
            />
          ))
        }
      </ul>
    )
  }
}

export default TodoList
