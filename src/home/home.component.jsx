import React from 'react'
import SocialMediaButton from './socialButton.component.jsx'

const mainColStyle = {
  textAlign: 'center',
  position: 'relative',
  top: '25vh',
  padding: '10px'
}

const headingStyle = {
  position: 'relative',
  marginBottom: '5vh'
}

const subHeadingStyle = {
  marginBottom: '5vh'
}

const Home = (props) =>
  <section style={mainColStyle}>
    <h1 style={headingStyle}>John A. Geddes</h1>
    <h2 style={subHeadingStyle}>Developer | Infrastructure | Automation</h2>
    <SocialMediaButton imgSrc='media/images/In-2C-128px-TM.png' link='https://www.linkedin.com/in/john-geddes-43835467/' alt='Find me on Linked In'/>
    <SocialMediaButton imgSrc='media/images/GitHub-Mark-120px-plus.png' link='https://github.com/botagar/' alt='Follow me on Github'/>
    <SocialMediaButton imgSrc='media/images/Twitter_Logo_WhiteOnBlue.png' link='https://twitter.com/91Geddes' alt='Follow me on Twitter'/>
  </section>

Home.propTypes = {
  // Import Proptypes to start asserting props (import PropTypes from 'prop-types')
}

export default Home
