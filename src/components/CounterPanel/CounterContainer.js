import React, { Component } from 'react'
import Counter from './Counter'
import PropTypes from 'prop-types'
import { handleIncreament, handleDecrease, getValueAsync } from '@/store/counter/actions'
import { connect } from 'react-redux'

@connect(state => state.counter, {
  handleIncreament,
  handleDecrease,
  getValueAsync
})
class CounterContainer extends Component {
  static propTypes = {
    caption: PropTypes.string.isRequired
  }

  render () {
    const counter = this.props
    return (
      <Counter
        value={ counter[counter.caption]}
        caption={ counter.caption }
        onUpdate={ this.handleUpdate }
      />
    )
  }

  componentDidMount () {
    this.props.getValueAsync()
  }

  handleUpdate = flag => {
    const { caption } = this.props
    flag === 'plus' ? this.props.handleIncreament(caption) : this.props.handleDecrease(caption)
  }

}

export default CounterContainer
