import 'babel-polyfill'
import Chai, { expect } from 'chai'
import ChaiThings from 'chai-things'
import { describe, before, beforeEach, it } from 'mocha'
import ConfigureStore from 'redux-mock-store'
import Axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import * as types from './blog.actionTypes'
import { fetchBlogPosts } from './blog.action'
import blogApiMiddleware from './blog.api.middleware'

const cmsEndpoint = 'https://api.graphcms.com/simple/v1/'
const cmsBlogId = 'cjdxzn44709t80186j9wtu2kc'

Chai.use(ChaiThings)

describe('Blog.Api.Middleware', function () {
  const middlewares = [blogApiMiddleware]
  const mockStoreFactory = ConfigureStore(middlewares)
  const testPosts = {data: [{ id: 1, createdAt: '01/01/2018', updatedAt: '01/01/2018', title: 'test', content: '# some markdown' }]}
  var store, mockAxios

  before(() => {
    store = mockStoreFactory({})
    mockAxios = new MockAdapter(Axios)
    // mockAxios.onPost().reply(200, testPosts)
    mockAxios.onPost(`${cmsEndpoint}${cmsBlogId}`, {
      query: '{ allNews { id createdAt updatedAt title content } }'
    }).reply(200, testPosts)
    // mockAxios.onPost(`${cmsEndpoint}${cmsBlogId}/`).timeout()
    // mockAxios.onPost(`${cmsEndpoint}${cmsBlogId}/`).networkError()
  })

  beforeEach(() => {
    store.clearActions()
  })

  xit('Should not interfere with other actions', async () => {
    const otherAction = { type: 'SOME_OTHER_ACTION', irrelavant: 'field' }

    await store.dispatch(otherAction)

    const actions = store.getActions()
    expect(actions.length).to.eql(1)
    expect(actions).to.include.something.that.deep.equals(otherAction)
  })

  it('Should fetch all blog posts with given fields in query', async () => {

    await store.dispatch(fetchBlogPosts())

    const actions = store.getActions()
    console.log(actions[1])
    const responseData = actions.posts
    expect(actions.length).to.eql(2)
    // expect(actions).to.include.something.that.deep.equals(fetchBlogPosts)
    // expect(responseData).to.have.property('id')
  })

  // it('Should handle a network timeout gracefully', async () => {
  //   const fetchBlogPosts = { type: 'fetchBlogPosts' }

  //   await store.dispatch(fetchBlogPosts)

  //   const actions = store.getActions()
  //   expect(actions.length).to.eql(1)
  //   // expect(actions).to.include.something.that.deep.equals(fetchBlogPosts)
  // })
})
