import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addTodo } from '@/store/todo/actions'

@connect(null, {
  addTodo
})
class AddTodo extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }

  constructor () {
    super()
    this.state = {
      value: ''
    }
  }

  render () {
    return (
      <form onSubmit={ this.handleFormSubmit }>
        <input value={ this.state.value } onChange={ this.handleInputChange } />
        <button type="submit">添加</button>
      </form>
    )
  }

  handleInputChange = e => {
    this.setState({
      value: e.target.value
    })
  }

  handleFormSubmit = e => {
    e.preventDefault()
    const inputVal = this.state.value
    if (!inputVal.trim()) return
    this.props.addTodo(inputVal)
    this.setState({
      value: ''
    })
  }
}

export default AddTodo
