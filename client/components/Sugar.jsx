import React, { Component } from 'react'
import { connect } from 'react-redux'

import { navigate } from '../actions'

class Sugar extends Component {

  navigateToListing = () => {
    this.props.dispatch(navigate('listing'))
  }

  sugarContent = () => {
    var ingredients = this.props.cart
    var sugars = ingredients.map(item => item.sugarContent)
    var totalSugars = sugars.reduce(
      ( accumulator, currentValue ) => accumulator + currentValue,
      0
    );
    return totalSugars / sugars.length
  }

  render() {
    return (
      <div className='sugar'>
        <h2>Smoothie Sugar</h2>
        <p>Sugar content per 100mls of smoothie</p>
        <p>Sugar: {this.sugarContent()}</p>

        <p className="actions">
          <button onClick={this.navigateToListing}>Home</button>
        </p>.
      </div>
    )
  }
}

function mapStateToProps({ cart }) {
  return {
    cart
  }
}

export default connect(mapStateToProps)(Sugar)