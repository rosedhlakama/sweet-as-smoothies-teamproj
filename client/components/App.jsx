import React from 'react'
import { connect } from 'react-redux'
import { HashRouter as Router, Route } from 'react-router-dom'

import Header from './Header'
import Listing from './Listing'
import Cart from './Cart'
import Sugar from './Sugar'

function App() {
  return (
    <Router>
      <div className='app'>
        <Header />
        <Route exact path="/" component={Listing} />
        <Route path="/cart" component={Cart} />
        <Route path="/checkout" component={Sugar} />
      </div>
    </Router >
  )
}

export default connect()(App)
