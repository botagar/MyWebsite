import * as types from './actionTypes'
import update from 'react-addons-update'

const shared = (state = [], action) => {
  switch (action.type) {
    case types.SET_PAGE_BACKGROUND:
      return update(state, {
        backgroundImg: {$set: action.backgroundImg}
      })
    default:
      return state
  }
}

export default shared
