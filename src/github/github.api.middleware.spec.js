import 'babel-polyfill'
import Chai, { expect } from 'chai'
import ChaiThings from 'chai-things'
import { describe, before, beforeEach, it } from 'mocha'
import ConfigureStore from 'redux-mock-store'
import Axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import * as types from './github.actionTypes'
import { setRepositories } from './github.action'
import githubApiMiddleware from './github.api.middleware'

Chai.use(ChaiThings)

describe('Github.Api.Middleware', function () {
  const middlewares = [githubApiMiddleware]
  const mockStoreFactory = ConfigureStore(middlewares)
  const testRepositories = [{ id: 1, name: 'Test Repository' }]
  const malformedTestRepositories = [{ ids: 1, name: 'Oh no... :(' }]
  var store, mockAxios

  before(() => {
    store = mockStoreFactory({})
    mockAxios = new MockAdapter(Axios)
    mockAxios.onGet('https://api.github.com/users/test/repos').reply(200, testRepositories)
      .onGet('https://api.github.com/users/test-404/repos').reply(404, {error: '404 not found'})
      .onGet('https://api.github.com/users/test-malformed-response/repos').reply(200, malformedTestRepositories)
    mockAxios.onGet('https://api.github.com/users/test-timeout/repos').timeout()
    mockAxios.onGet('https://api.github.com/users/test-net-error/repos').networkError()
  })

  beforeEach(() => {
    store.clearActions()
  })

  it('Should not interfere with other actions', async () => {
    const otherAction = { type: 'SOME_OTHER_ACTION', irrelavant: 'field' }

    await store.dispatch(otherAction)

    const actions = store.getActions()
    expect(actions.length).to.eql(1)
    expect(actions).to.include.something.that.deep.equals(otherAction)
  })

  it('Should dispatch FetchSuccess upon successful api call', async () => {
    const fetchRepositoriesAction = { type: types.FETCH_REPOSITORIES_START, username: 'test' }

    await store.dispatch(fetchRepositoriesAction)

    const actions = store.getActions()

    const successPayload = setRepositories(testRepositories)
    expect(actions).to.include.something.that.deep.equals(fetchRepositoriesAction)
    expect(actions).to.include.something.that.deep.equals(successPayload)
  })

  it('Should dispatch FetchError upon 404 response', async () => {
    const fetchRepositoriesAction = { type: types.FETCH_REPOSITORIES_START, username: 'test-404' }

    await store.dispatch(fetchRepositoriesAction)

    const actions = store.getActions()

    expect(actions.find(x => x.type === types.FETCH_REPOSITORIES_FAILED)).to.exist // eslint-disable-line
  })

  /*
    I'm not going to cover all the cases here, even thought I'm setup for them.
    Maybe you can TDD it as an exercise! 💯 😨 😱 👻
  */
})
