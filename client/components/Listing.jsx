import React, { Component } from 'react'

import BeerList from './BeerList'
import data from '../../data/beers'

export default class Listing extends Component {
  state = {
    beers: data.beers
  }

  render() {
    const { beers } = this.state

    return (
      <div>
        <BeerList beers={beers} />
      </div>
    )
  }
}