import {
  RECEIVE_FRUITS,
  NAVIGATE
} from '../actions'

const waiting = (state = false, action) => {
  switch (action.type) {
    // case RECEIVE_FRUITS:
    //   return true

    case NAVIGATE:
      return false

    default:
      return state
  }
}

export default waiting
