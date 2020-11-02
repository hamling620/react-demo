import React from 'react'
import CounterContainer from './CounterContainer'
import Summary from './Summary'

function CounterPanel () {
  return (
    <>
      <CounterContainer caption="first" />
      <CounterContainer caption="second" />
      <CounterContainer caption="third" />
      <Summary />
    </>
  )
}

export default CounterPanel
