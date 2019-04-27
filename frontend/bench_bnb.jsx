import React from 'react'
import ReactDOM from 'react-dom'
import * as APIUtil from './actions/session_actions'


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root')

  window.APIUtil = APIUtil

  ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root)
})