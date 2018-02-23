import * as types from './blog.actionTypes'
import update from 'react-addons-update'

const blog = (state = [], action) => {
  switch (action.type) {
    case types.FETCH_BLOGS_START:
      return update(state, {
        posts: {$set: []},
        loading: {$set: true},
        error: {$set: false}
      })
    case types.FETCH_BLOGS_SUCCESS:
      return update(state, {
        posts: {$set: action.posts},
        loading: {$set: false}
      })
    case types.FETCH_BLOGS_FAILED:
      return update(state, {
        posts: {$set: []},
        loading: {$set: false},
        error: {$set: true}
      })
    default:
      return state
  }
}

export default blog
