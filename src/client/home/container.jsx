import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

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
      <div>
      </div>
    )
  }
}

const MainContentContainer = styled(ContentContainer)`
  text-align: center;
  align-items: center;
  justify-content: center;
  // position: relative;
`

const ContentSection = styled.div`
  background-color: rgba(255,255,255,0.8);
  border-radius: 15px 50px;
  z-index: 1;

  ${breakpoint('mobile')`
    padding: 5vh 2vw;
    margin: 1vh 5vw;
  `}

  ${breakpoint('tablet')`
    padding: 5vh 10vw;
    margin: 0;
  `}
`
const Title = styled.h1`
  margin-bottom: 5vh;

  ${breakpoint('mobile')`
    font-size: 4em
  `}

  ${breakpoint('tablet')`
    font-size: 6em
  `}
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
