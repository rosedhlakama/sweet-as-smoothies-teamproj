import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Blending from './Blending'
class Sugar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    setTimeout(() => this.setState({ isLoading: false }), 2000);
  }

  sugarContent = () => {
    var ingredients = this.props.cart
    var sugars = ingredients.map(item => item.sugarContent)
    var totalSugars = sugars.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    return totalSugars / sugars.length
  }

  render() {
    if (this.state.isLoading) {
      return <Blending />
    }
    else {
      return (
        <div className='sugar'>
           <div className='sugar-text'>
             <h2>Smoothie Sugar</h2>
          <p>Sugar content per 100mls of smoothie</p>
         
          <p className="actions">
            <Link to={'/'}>
              <button>Home</button>
            </Link>
          </p>
              </div>
       <div className='sugar-jar'>
          <div className='sugar-text'>{this.sugarContent()}g</div>
        </div>
      </div>
      )
    }
  }
}

function mapStateToProps({ cart }) {
  return {
    cart
  }
}

export default connect(mapStateToProps)(Sugar)