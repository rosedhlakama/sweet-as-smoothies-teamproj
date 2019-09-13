import React, { Component } from 'react'
import { connect } from 'react-redux'
import Blending from './Blending'

import Header from './Header'
import Listing from './Listing'
import Cart from './Cart'
import Sugar from './Sugar'


class App extends Component {

  render() {
    const { navigation, waiting } = this.props

    return (
      <div className='app'>
        <Header />
        {!waiting && navigation === 'cart' && <Cart />}
        {!waiting && navigation === 'listing' && <Listing />}
        {!waiting && navigation === 'sugar' && <Sugar />}
        {waiting && <Blending />}
      </div>
    )
  }
}

function mapStateToProps({ navigation, waiting }) {
  return {
    navigation, waiting
  }
}

export default connect(mapStateToProps)(App)
