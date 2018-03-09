import { combineReducers } from 'redux'

import Shared from '../shared/reducer'
import Blog from '../blog/reducer'

export default combineReducers({
  Shared,
  Blog
})
