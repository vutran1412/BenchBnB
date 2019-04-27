import { RECEIVE_CURRENT_USER, REMOVE_CURRENT_USER } from '../actions/session_actions'

const _null_user = {}

const usersReducer = (state=_null_user, action) => {
  Object.freeze(state)
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
    //overwriting existing user info
      return Object.assign({}, { [action.currentUser.id]: action.currentUser })
    case REMOVE_CURRENT_USER:
      return _null_user
    default:
      return state;
  }
}

export default usersReducer