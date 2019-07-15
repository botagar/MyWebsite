import * as types from './actionTypes'

export const blogPostsFetched = posts => {
  return {
    type: types.FETCH_BLOGS_SUCCESS,
    posts
  }
}

export const fetchBlogPostsFailed = error => {
  return {
    type: types.FETCH_BLOGS_FAILED,
    error
  }
}

export const fetchBlogPosts = () => {
  return {
    type: types.FETCH_BLOGS_START
  }
}
