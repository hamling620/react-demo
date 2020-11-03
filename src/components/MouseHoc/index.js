import React, { Component } from 'react'
import withMouse from './withMouse'

class Mouse extends Component {
  render () {
    const { x, y } = this.props
    return (
      <div style={{ height: 300 }}>
        hello world x: { x }, y: { y }
      </div>
    )
  }
}

export default withMouse(Mouse)
