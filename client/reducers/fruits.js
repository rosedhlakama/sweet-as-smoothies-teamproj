import { RECEIVE_FRUITS } from '../actions'

export default function fruitsReducer(oldState = [], action) {
  switch (action.type) {
    case RECEIVE_FRUITS:
      return action.fruits

    default:
      return oldState
  }
}