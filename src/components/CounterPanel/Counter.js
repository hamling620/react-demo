import React  from 'react'
import PropTypes from 'prop-types'

const  Counter = ({ caption, value, onUpdate }) => {
  return (
    <div>
      <button onClick={ () => onUpdate('minus') }>-</button>
      <span>{ caption }: { value }</span>
      <button onClick={ () => onUpdate('plus')}>+</button>
    </div>
  )
}

Counter.propTypes = {
  caption: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onUpdate: PropTypes.func.isRequired
}

export default Counter
