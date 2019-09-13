import { combineReducers } from 'redux'

import navigation from './navigation'
import cart from './cart'
import fruits from './fruits'
import waiting from './waiting'

export default combineReducers({
  navigation,
  cart,
  fruits,
  waiting
})
