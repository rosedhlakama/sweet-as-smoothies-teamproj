import { combineReducers } from 'redux'

import navigationReducer from './navigation'
import cartReducer from './cart'

export default combineReducers({
  navigation: navigationReducer,
  cart: cartReducer
})
