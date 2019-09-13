import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from './Header'
import Listing from './Listing'
import Cart from './Cart'
import Sugar from './Sugar'
class App extends Component {
  render() {
    const { navigation } = this.props

    return (
      <div className='app'>
        <Header />
        {navigation === 'cart' && <Cart />}
        {navigation === 'listing' && <Listing />}
        {navigation === 'sugar' && <Sugar />}
      </div>
    )
  }
}

function mapStateToProps({ navigation }) {
  return {
    navigation
  }
}

export default connect(mapStateToProps)(App)
