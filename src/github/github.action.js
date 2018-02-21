import * as types from './github.actionTypes'

export const setRepositories = repositories => {
  return {
    type: types.FETCH_REPOSITORIES_SUCCESS,
    repositories
  }
}

export const fetchRepositoriesFailed = error => {
  return {
    type: types.FETCH_REPOSITORIES_FAILED,
    error
  }
}

export const loadReposForUser = username => {
  // validate username?
  return {
    type: types.FETCH_REPOSITORIES_START,
    username
  }
}
