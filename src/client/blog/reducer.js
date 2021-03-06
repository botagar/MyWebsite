import * as types from './actionTypes'
import update from 'react-addons-update'

const blog = (state = [], action) => {
  switch (action.type) {
    case types.FETCH_BLOGS_START:
      return update(state, {
        loading: {$set: true},
        error: {$set: ''}
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
        error: {$set: action.error}
      })
    default:
      return state
  }
}

export default blog
