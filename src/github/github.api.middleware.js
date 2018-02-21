import 'babel-polyfill'
import axios from 'axios'
import * as types from './github.actionTypes'
import { setRepositories, fetchRepositoriesFailed } from './github.action'

// Code written with guidance from http://www.sohamkamani.com/blog/2016/06/05/redux-apis/
const GithubApiMiddleware = store => next => async action => {
  next(action)

  switch (action.type) {
    case types.FETCH_REPOSITORIES_START:
      let username = action.username
      let endpoint = `https://api.github.com/users/${username}/repos`

      try {
        const res = await axios.get(endpoint)
        return next(setRepositories(res.data))
      } catch (err) {
        return next(fetchRepositoriesFailed(err))
      }
    default:
      break
  }
}

export default GithubApiMiddleware
