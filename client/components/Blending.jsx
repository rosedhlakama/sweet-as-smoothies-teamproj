import React from 'react'
import {connect} from 'react-redux'

const WaitIndicator = (props) => {
  return props.waiting ? (
    <img className='wait-blending' src='../../images/blender.png' />
  ) : null;
}

function mapStateToProps (state) {
  return {
    waiting: state.waiting
  }
}

export default connect(mapStateToProps)(WaitIndicator)