import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setFilter } from '@/store/filter/actions'

@connect((state, ownProps) => ({
  active: state.filter === ownProps.filter
}), (dispatch, ownProps) => ({
  onClick: () => dispatch(setFilter(ownProps.filter))
}))
class FilterLink extends Component {
  static propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
  }

  render () {
    const { active, children, onClick } = this.props
    if (active) {
      return <b>{ children }</b>
    }
    return (
      <a href="/" onClick={ e => {
        e.preventDefault()
        onClick()
      }}>{ children }</a>
    )
  }
}

export default FilterLink
