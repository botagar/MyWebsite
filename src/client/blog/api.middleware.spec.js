import 'babel-polyfill'
import Chai, { expect } from 'chai'
import ChaiThings from 'chai-things'
import { describe, before, beforeEach, it } from 'mocha'
import ConfigureStore from 'redux-mock-store'
import Axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import * as types from './actionTypes'
import { fetchBlogPosts } from './actions'
import blogApiMiddleware from './api.middleware'

// TODO: Extract to a config file of some sort
const cmsEndpoint = 'https://api.graphcms.com/simple/v1/'
const cmsBlogId = 'cjdxzn44709t80186j9wtu2kc'

Chai.use(ChaiThings)

describe('Blog.Api.Middleware', function () {
  const middlewares = [blogApiMiddleware]
  const mockStoreFactory = ConfigureStore(middlewares)
  const testPosts = {
    data: {
      allNews: [{ id: 1, createdAt: '01/01/2018', updatedAt: '01/01/2018', title: 'test', content: '# some markdown' }]
    }
  }
  var store, mockAxios

  before(() => {
    store = mockStoreFactory({})
    mockAxios = new MockAdapter(Axios)
    mockAxios.onPost(`${cmsEndpoint}${cmsBlogId}`, {
      query: '{ allNews { id createdAt updatedAt title content } }'
    }).reply(200, testPosts)
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

  it('Should fetch all blog posts with given fields in query', async () => {
    await store.dispatch(fetchBlogPosts())

    const actions = store.getActions()
    const successAction = actions.find(action => { return action.type === types.FETCH_BLOGS_SUCCESS })
    expect(actions.length).to.eql(2)
    expect(successAction.posts[0]).to.have.property('id')
  })

  it('Should handle a network timeout gracefully', async () => {
    mockAxios.reset()
    mockAxios.onPost(`${cmsEndpoint}${cmsBlogId}`).timeout()

    await store.dispatch(fetchBlogPosts())

    const actions = store.getActions()
    const failedAction = actions.find(action => { return action.type === types.FETCH_BLOGS_FAILED })
    expect(failedAction).to.exist // eslint-disable-line
    expect(failedAction.error.code).to.eql('ECONNABORTED')
  })

  it('Should handle a network error gracefully', async () => {
    mockAxios.reset()
    mockAxios.onPost(`${cmsEndpoint}${cmsBlogId}`).networkError()

    await store.dispatch(fetchBlogPosts())

    const actions = store.getActions()
    const failedAction = actions.find(action => { return action.type === types.FETCH_BLOGS_FAILED })
    expect(failedAction).to.exist // eslint-disable-line
    expect(failedAction.error.message).to.contain('Network Error')
  })
})
