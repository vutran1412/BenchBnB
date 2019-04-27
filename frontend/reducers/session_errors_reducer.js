import { RECEIVE_CURRENT_USER,  RECEIVE_SESSION_ERRORS} from '../actions/session_actions'

const _nullErrors = {}

const sessionErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state)
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
    //overwriting existing user info
      return _nullErrors
    case RECEIVE_SESSION_ERRORS:
      return Object.assign({}, {errors: action.errors.errors})
    default:
      return state;
  }
}

export default sessionErrorsReducer