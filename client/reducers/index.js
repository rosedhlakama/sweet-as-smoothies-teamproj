import { combineReducers } from 'redux'

import navigationReducer from './navigation'
import cartReducer from './cart'
import fruitsReducer from './fruits'

export default combineReducers({
  navigation: navigationReducer,
  cart: cartReducer,
  fruits: fruitsReducer
})
