import { expect } from 'chai'
import { describe, it } from 'mocha'
import deepFreeze from 'deepfreeze'

import * as types from './github.actionTypes'
import github from './github.reducer'

describe('Github.Reducer', function () {
  it('Should do nothing if invalid action', function () {
    let initialState = { repositories: [] }
    let repository = {id: 2, name: 'Test Repo 2'}

    deepFreeze(initialState)

    let newState = github(initialState, { type: 'INVALID_ACTION', repository })

    expect(newState).to.eql(initialState)
  })

  it('Should set state repositories to the new repositories list', function () {
    let initialState = { repositories: [{id: 1, name: 'Test Repo'}] }
    let newRepositories = [
      {id: 2, name: 'Test Repo 2'},
      {id: 3, name: 'Test Repo 3'},
      {id: 4, name: 'Test Repo 4'}
    ]

    deepFreeze(initialState)

    let newState = github(initialState, { type: types.FETCH_REPOSITORIES_SUCCESS, repositories: newRepositories })

    expect(newState.repositories.length).to.eql(3)
    expect(newState.repositories).to.eql(newRepositories)
  })
})
