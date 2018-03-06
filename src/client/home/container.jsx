import React from 'react'
import styled from 'styled-components'

import ContentContainer from '../common/styles/contentContainer'
import SocialMediaButton from './socialButton.component.jsx'

import linkedInIcon from '../../../media/images/In-2C-128px-TM.png'
import githubIcon from '../../../media/images/GitHub-Mark-120px-plus.png'
import twitterIcon from '../../../media/images/Twitter_Logo_WhiteOnBlue.png'

const Home = (props) =>
  <MainContentContainer>
    <div>
      <Title>John A. Geddes</Title>
      <SubTitle>Developer | Infrastructure | Automation</SubTitle>
      <SocialMediaButton imgSrc={linkedInIcon} link='https://www.linkedin.com/in/john-geddes-43835467/' alt='Find me on Linked In' />
      <SocialMediaButton imgSrc={githubIcon} link='https://github.com/botagar/' alt='Follow me on Github' />
      <SocialMediaButton imgSrc={twitterIcon} link='https://twitter.com/91Geddes' alt='Follow me on Twitter' />
    </div>
  </MainContentContainer>

Home.propTypes = {
  // Import Proptypes to start asserting props (import PropTypes from 'prop-types')
}

const MainContentContainer = ContentContainer.extend`
  text-align: center
  align-items: center
`
const Title = styled.h1`
  margin-bottom: 5vh
`
const SubTitle = styled.h2`
  margin-bottom: 5vh
`

export default Home
