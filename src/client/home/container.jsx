import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import ContentContainer from '../shared/styles/contentContainer'
import SocialMediaButton from './socialButton.component.jsx'
import { setPageBackgroundImg } from '../shared/actions'

import backgroundImg from '../../../media/images/forrest-in-morning.jpg' 
import linkedInIcon from '../../../media/images/In-2C-128px-TM.png'
import githubIcon from '../../../media/images/GitHub-Mark-120px-plus.png'
import twitterIcon from '../../../media/images/Twitter_Logo_WhiteOnBlue.png'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.actions = {
      setPageBackground: props.setPageBackgroundImage
    }
  }

  componentWillMount () {
    this.actions.setPageBackground(backgroundImg)
  }

  componentWillReceiveProps (nextProps) {}

  render () {
    return (
      <MainContentContainer>
        <ContentSection>
          <Title>John A. Geddes</Title>
          <SubTitle>Developer | Infrastructure | Automation</SubTitle>
          <SocialMediaButton imgSrc={linkedInIcon} link='https://www.linkedin.com/in/john-geddes-43835467/' alt='Find me on Linked In' />
          <SocialMediaButton imgSrc={githubIcon} link='https://github.com/botagar/' alt='Follow me on Github' />
          <SocialMediaButton imgSrc={twitterIcon} link='https://twitter.com/91Geddes' alt='Follow me on Twitter' />
        </ContentSection>
      </MainContentContainer>
    )
  }
}

const MainContentContainer = ContentContainer.extend`
  text-align: center;
  align-items: center;
  justify-content: center;  
`
const ContentSection = styled.div`
  background-color: rgba(255,255,255,0.8);
  padding: 3em 7em;
  border-radius: 15px 50px;
`
const Title = styled.h1`
  margin-bottom: 5vh;
`
const SubTitle = styled.h2`
  margin-bottom: 5vh;
`


const mapStateToProps = state => {
  return state
}

const mapDispatchToEvents = dispatch => {
  return {
    setPageBackgroundImage: img => {
      dispatch(setPageBackgroundImg(img))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToEvents)(Home)
