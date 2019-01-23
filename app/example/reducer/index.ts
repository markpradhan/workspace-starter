// Lib Imports
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import test from './test'

// Reducers
export default history =>
  combineReducers({ router: connectRouter(history), test })
