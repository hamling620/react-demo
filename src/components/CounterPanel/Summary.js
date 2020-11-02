import React, { Component } from 'react'
import { connect } from 'react-redux'

@connect(state => {
  const values = state.counter
  let total = 0
  for (const k of Object.keys(values)) {
    total += values[k]
  }
  return { total }
})
class Summary extends Component {
  render () {
    return (
    <div>total: { this.props.total }</div>
    )
  }
}

export default Summary
