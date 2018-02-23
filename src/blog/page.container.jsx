import _ from 'underscore'
import React from 'react'
import { connect } from 'react-redux'

import { fetchBlogPosts } from './blog.action'

class BlogPage extends React.Component {
  // https://reactjs.org/docs/react-component.html

  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      error: false,
      posts: []
    }
    this.events = {
      requestLatestPosts: props.requestLatestPosts
    }
  }

  componentWillMount() {
    this.events.requestLatestPosts()
  }

  componentWillReceiveProps(nextProps) {
    this.setState((prevState, props) => {
      return {
        loading: props.loading,
        error: props.error,
        posts: props.posts
      }
    })
  }

  render() {
    return (
      <div>
        <p>Bloggo</p>
        { this.state.loading ? <p>Loading</p> : ''}
        { this.state.error ? <p>Error</p> : ''}
        { _.map(this.state.posts, post => {
          return <p key={post.id}>{post.title}</p>
        }) }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    posts: state.Blog.posts,
    loading: state.Blog.loading,
    error: state.Blog.error
  }
}

const mapDispatchToEvents = dispatch => {
  return {
    requestLatestPosts: (event) => {
      dispatch(fetchBlogPosts())
    }
   }
}

export default connect(mapStateToProps, mapDispatchToEvents)(BlogPage) 
