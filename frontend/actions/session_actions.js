import { login, signup, logout } from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const REMOVE_CURRENT_USER = 'REMOVE_CURRENT_USER'
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS'

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
})

export const logoutCurrentUser = () => ({
  type: REMOVE_CURRENT_USER
})

//maybe wrong type for pojo? This is the right type of POJO
export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
})

export const loginUser = user => dispatch => (
  login(user).then( user => dispatch(receiveCurrentUser(user)), errors => dispatch(receiveErrors(errors)))
)

export const signupUser = user => dispatch => (
  signup(user).then( user => dispatch(receiveCurrentUser(user)), errors => dispatch(receiveErrors(errors)))
)

export const logoutUser = () => dispatch => (
  logout().then( () => dispatch(logoutCurrentUser()))
)
//possible issue here with handling errors