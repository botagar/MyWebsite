import * as types from './github.actionTypes'
import update from 'react-addons-update'

const github = (state = [], action) => {
  switch (action.type) {
    case types.FETCH_REPOSITORIES_START:
      return update(state, {
        repositories: {$set: []},
        loading: {$set: true},
        error: {$set: false}
      })
    case types.FETCH_REPOSITORIES_SUCCESS:
      return update(state, {
        repositories: {$set: action.repositories},
        loading: {$set: false}
      })
    case types.FETCH_REPOSITORIES_FAILED:
      return update(state, {
        repositories: {$set: []},
        loading: {$set: false},
        error: {$set: true}
      })
    default:
      return state
  }
}

export default github
