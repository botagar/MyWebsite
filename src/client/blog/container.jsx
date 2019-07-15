import _ from 'underscore'
import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import ContentContainer from '../shared/styles/contentContainer'
import BlogPost from './blogpost.jsx'
import { setPageBackgroundImg } from '../shared/actions'
import { fetchBlogPosts } from './actions'

import backgroundImg from '../../../media/images/forrest-in-morning.jpg' 

class BlogPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: true,
      error: false,
      posts: []
    }
    this.actions = {
      setPageBackground: props.setPageBackgroundImage,
      requestLatestPosts: props.requestLatestPosts
    }
  }

  componentWillMount () {
    this.actions.setPageBackground(backgroundImg)
    this.actions.requestLatestPosts()
  }

  componentWillReceiveProps (nextProps) {
    this.setState((prevState, props) => {
      return {
        loading: props.loading,
        error: props.error,
        posts: props.posts
      }
    })
  }

  render () {
    return (
      <MainContentContainer>
        { this.state.loading ? <p>Loading</p> : ''}
        { this.state.error ? <p>Error</p> : ''}
        { _.map( this.state.posts, post => {
          return <BlogPost key={ post.id } content={ post } />
        }) }
      </MainContentContainer>
    )
  }
}

const MainContentContainer = ContentContainer.extend`
  text-align: center;
  align-items: center;
  justify-content: center;  
`

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
    },
    setPageBackgroundImage: img => {
      dispatch(setPageBackgroundImg(img))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToEvents)(BlogPage)
