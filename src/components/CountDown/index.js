import { Component } from 'react'
import PropTypes from 'prop-types'

class CountDown extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    initCount: PropTypes.number.isRequired
  }

  constructor (props) {
    super(props)
    this.state = {
      count: this.props.initCount
    }
  }

  render () {
    return this.props.children(this.state.count)
  }

  componentDidMount () {
    this.intervalHandler = setInterval(() => {
      const newCount = this.state.count - 1
      if (newCount >= 0) {
        this.setState({
          count: newCount
        })
      } else {
        clearInterval(this.intervalHandler)
        this.intervalHandler = null
      }
    }, 1000)
  }

  componentWillUnmount () {
    if (this.intervalHandler) {
      clearInterval(this.intervalHandler)
    }
  }

  shouldComponentUpdate (nextProps, nextState) {
    return nextState.count !== this.state.count
  }

}

export default CountDown
