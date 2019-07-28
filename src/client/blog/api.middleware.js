import "core-js/stable";
import "regenerator-runtime/runtime";
import axios from 'axios'
import * as types from './actionTypes'
import { blogPostsFetched, fetchBlogPostsFailed } from './actions'

const BlogApiMiddleware = store => next => async action => {
  next(action)

  switch (action.type) {
    case types.FETCH_BLOGS_START:
      // TODO: Extract endpoint into a config file
      let endpoint = `https://api.graphcms.com/simple/v1/cjdxzn44709t80186j9wtu2kc`
      try {
        let query = `{ allNews { id createdAt updatedAt title content } }`
        let res = await axios.post(endpoint, {
          query: query
        }, {
          headers: {'Content-Type': 'application/json'}
        })
        return next(blogPostsFetched(res.data.data.allNews))
      } catch (err) {
        return next(fetchBlogPostsFailed(err))
      }
    default:
      break
  }
}

export default BlogApiMiddleware
