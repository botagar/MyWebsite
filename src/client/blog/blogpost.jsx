import React, { Component } from 'react'
import styled from 'styled-components'

class BlogPost extends Component {
  constructor (props) {
    super(props)
    console.log(props)
    this.state = props.content
  }

  render () {
    console.log('state:', this.state)
    return (
      <BlogPostContainer>
        <h3>{ this.state.title }</h3>
        <PostMetadata>
          <ul>
            <li>Created At {this.state.createdAt}</li>
            <li>Updated At {this.state.updatedAt}</li>
          </ul>
        </PostMetadata>
        <p>{this.state.content}</p>
      </BlogPostContainer>
    )
  }
}

const BlogPostContainer = styled.section`
   height: 100px;
   background: white;
`

const PostMetadata = styled.div`

`

export default BlogPost
