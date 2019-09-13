import React from 'react'
import {connect} from 'react-redux'

const WaitIndicator = (props) => {
  return( 
  <div className="blending">
    <img className='wait-blending' src='images/blender.png' />
  </div>)
}


export default connect()(WaitIndicator)