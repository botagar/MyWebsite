import React from 'react'

import contentContainerSize from '../shared/styles/contentContainer'

const contentContainerStyle = {
  ...contentContainerSize,
  textAlign: 'center',
  alignItems: 'center'
}

const About = () =>
  <section style={contentContainerStyle}>
    <h1>About ME!</h1>
  </section>

export default About
