import React from 'react'
import styled from 'styled-components'

import ContentContainer from '../shared/styles/contentContainer'

class About extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.actions = {}
  }

  componentWillMount () {}

  render () {
    return (
      <MainContentContainer>
        <h1>About ME!</h1>
      </MainContentContainer>
    )
  }
}

const MainContentContainer = ContentContainer.extend`
  text-align: center;
  align-items: center;
  justify-content: center;  
`

export default About
