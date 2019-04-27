import { RECEIVE_CURRENT_USER, REMOVE_CURRENT_USER } from '../actions/session_actions'

const _null_session = { id: null }

const sessionReducer = (state=_null_session, action) => {
  Object.freeze(state)
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
    //overwriting existing user info
      return Object.assign( {}, { id: action.currentUser.id })
    case REMOVE_CURRENT_USER:
      return _null_session
    default:
      return state;
  }
}

export default sessionReducer;