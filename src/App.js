import React, { Suspense } from 'react'
import Mouse from '@/components/MouseHoc'

const App = () => (
  <Suspense fallback={ <div>loading...</div>}>
    <Mouse />
  </Suspense>
)

export default App
