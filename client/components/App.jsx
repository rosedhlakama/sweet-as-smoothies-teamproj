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
        {navigation === 'cart' && <Cart />}
        {navigation === 'listing' && <Listing />}
        {navigation === 'sugar' && <Sugar />}
        {waiting && <Blending />}
      
      </div>
    )
  }
}

function mapStateToProps({ navigation, waiting }) {
  return {
    navigation, waiting:true
  }
}

export default connect(mapStateToProps)(App)
