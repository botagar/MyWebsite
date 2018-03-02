import React from 'react'
import SocialMediaButton from './socialButton.component.jsx'

const mainColStyle = {
  gridColumn: 'center-content-col / span 1',
  gridRow: 'center-content-row / span 1',
  display: 'grid',
  textAlign: 'center',
  height: '90vh',
  alignItems: 'center',
}

const contentStyle = {
}

const headingStyle = {
  marginBottom: '5vh'
}

const subHeadingStyle = {
  marginBottom: '5vh'
}

const Home = (props) =>
  <section style={mainColStyle}>
    <div style={contentStyle}>
      <h1 style={headingStyle}>John A. Geddes</h1>
      <h2 style={subHeadingStyle}>Developer | Infrastructure | Automation</h2>
      <SocialMediaButton imgSrc='media/images/In-2C-128px-TM.png' link='https://www.linkedin.com/in/john-geddes-43835467/' alt='Find me on Linked In'/>
      <SocialMediaButton imgSrc='media/images/GitHub-Mark-120px-plus.png' link='https://github.com/botagar/' alt='Follow me on Github'/>
      <SocialMediaButton imgSrc='media/images/Twitter_Logo_WhiteOnBlue.png' link='https://twitter.com/91Geddes' alt='Follow me on Twitter'/>
    </div>
  </section>

Home.propTypes = {
  // Import Proptypes to start asserting props (import PropTypes from 'prop-types')
}

export default Home
