import { expect } from 'chai'
import { describe, it } from 'mocha'
import deepFreeze from 'deepfreeze'

import * as types from './blog.actionTypes'
import blogReducer from './blog.reducer'

describe('Blog.Reducer', function () {
  it('Should do nothing if invalid action', function () {
    let initialState = { repositories: [] }

    let newState = blogReducer(undefined, { type: 'INVALID_ACTION' })

    expect(newState).to.eql([])
  })

  it('Should indicate that blog post retrieval is in progress', function () {
    let initialState = {
      posts: [{something: 'doesn\'t matter'}],
      loading: false,
      error: ''
    }

    deepFreeze(initialState)

    let newState = blogReducer(initialState, { type: types.FETCH_BLOGS_START })

    expect(newState.posts.length).to.eql(initialState.posts.length)
    expect(newState.loading).to.be.true // eslint-disable-line
    expect(newState.error).to.be.empty // eslint-disable-line
  })

  it('Should set state for Blogs to the retrieved list of blog posts', function () {
    let initialState = {
      posts: [{id: 0, createdAt: '01/01/2018', updatedAt: '01/01/2018', title: 'test0', content: '# some markdown'}],
      loading: true
    }
    let blogPosts = [
      {id: 1, createdAt: '01/01/2018', updatedAt: '01/01/2018', title: 'test1', content: '# some markdown'},
      {id: 2, createdAt: '02/01/2018', updatedAt: '02/01/2018', title: 'test2', content: '# some markdown'},
      {id: 3, createdAt: '03/01/2018', updatedAt: '03/01/2018', title: 'test3', content: '# some markdown'}
    ]

    deepFreeze(initialState)

    let newState = blogReducer(initialState, { type: types.FETCH_BLOGS_SUCCESS, posts: blogPosts })

    expect(newState.posts.length).to.eql(3)
    expect(newState.posts).to.eql(blogPosts)
    expect(newState.loading).to.be.false // eslint-disable-line
  })

  it('Should set error message on failed blog post retrieval', function () {
    let initialState = {
      posts: [],
      loading: true
    }
    let errorObj = {
      error: 'something bad happened'
    }

    deepFreeze(initialState)

    let newState = blogReducer(initialState, { type: types.FETCH_BLOGS_FAILED, error: errorObj })

    expect(newState.posts.length).to.eql(0)
    expect(newState.error).to.eql(errorObj)
    expect(newState.loading).to.be.false // eslint-disable-line
  })
})
