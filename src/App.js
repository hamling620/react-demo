import React, { Suspense } from 'react'
import Todos from '@/components/Todos'
import Filters from '@/components/Filters'

const App = () => (
  <Suspense fallback={ <div>loading...</div>}>
    <Todos />
    <Filters />
  </Suspense>
)

export default App
