import { NAVIGATE } from '../actions'

export default function navigationReducer(oldState = 'listing', action) {
  switch (action.type) {
    case NAVIGATE:
      return action.navigation

    default:
      return oldState
  }
}