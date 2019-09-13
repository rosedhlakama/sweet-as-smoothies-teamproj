import { combineReducers } from 'redux'

import cart from './cart'
import fruits from './fruits'

export default combineReducers({
  cart,
  fruits,
})
