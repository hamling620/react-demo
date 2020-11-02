import React from 'react'
import FilterLink from './FilterLink'
import { filterTypes } from '@/constants'

const Filters = () => {
  return (
    <div>
      <FilterLink filter={ filterTypes.ALL }>{ filterTypes.ALL }</FilterLink>
      <FilterLink filter={ filterTypes.COMPLETED }>{ filterTypes.COMPLETED }</FilterLink>
      <FilterLink filter={ filterTypes.UNCOMPLETED }>{ filterTypes.UNCOMPLETED }</FilterLink>
    </div>
  )
}

export default Filters
