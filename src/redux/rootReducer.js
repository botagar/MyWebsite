import { combineReducers } from 'redux'

import Github from '../github/github.reducer'
import Blog from '../blog/blog.reducer'

export default combineReducers({
  Github,
  Blog
})
