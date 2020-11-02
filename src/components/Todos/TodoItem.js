import React from 'react'
import PropTypes from 'prop-types'

const TodoItem = ({ onToggle, onRemove, completed, text }) => {
  const checkedProp = completed ? { checked: true } : {}
  return (
    <li>
      <input type="checkbox" {...checkedProp} readOnly onChange={ onToggle } />
      <label>{ text }</label>
      <button onClick={ onRemove }>×</button>
    </li>
  )
}

TodoItem.propTypes = {
  onToggle: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default TodoItem
