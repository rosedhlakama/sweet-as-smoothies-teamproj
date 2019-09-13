import { combineReducers } from 'redux'

import navigation from './navigation'
import cart from './cart'
import fruits from './fruits'

export default combineReducers({
  navigation,
  cart,
  fruits,
})
