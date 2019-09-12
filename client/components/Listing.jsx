import React, { Component } from 'react'
import { connect } from 'react-redux'

import FruitList from './FruitList'
import { fetchFruits } from '../actions'

class Listing extends Component {
  constructor(props) {
    super()
    this.state = {
      fruits: props.fruits
    }
  }

  componentDidMount() {
    this.props.dispatch(fetchFruits())
  }

  componentWillReceiveProps({ fruits }) {
    this.setState({ fruits })
  }

  render() {
    return (
      <div>
        <FruitList fruits={this.state.fruits} />
      </div>
    )
  }
}

function mapStateToProps({ fruits }) {
  return {
    fruits
  }
}

export default connect(mapStateToProps)(Listing)