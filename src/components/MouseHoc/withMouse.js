import React, { Component } from 'react'

const withMouse = (WrappedComponent) => {
  return class MouseComponent extends Component {
    constructor () {
      super()
      this.state = {
        x: 0,
        y: 0
      }
    }

    render () {
      const props = { x: this.state.x, y: this.state.y, ...this.props }
      return (
        <div onMouseMove={ this.handleMouseMove }>
          <WrappedComponent {...props} />
        </div>
      )
    }

    handleMouseMove = (e) => {
      this.setState({
        x: e.clientX,
        y: e.clientY
      })
    }

  }
}

export default withMouse
