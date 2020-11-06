import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '@/views/Home'
import Login from '@/views/Login'
import NotFound from '@/views/NotFound'

const App = () => (
  <Suspense fallback={ <div>loading...</div>}>
    <Router>
      <Switch>
        <Route path="/" exact component={ Home } />
        <Route path="/login" component={ Login } />
        <Route path="*" component={ NotFound } />
      </Switch>
    </Router>
  </Suspense>
)

export default App
