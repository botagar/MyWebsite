import React from 'react'
import NavBar from '../common/navbar.component.jsx'
import NavConfig from '../common/navLinks.config.js'

const About = () =>
  <div>
    <NavBar navLinks={NavConfig} />
    <h1>About... hi</h1>
  </div>

export default About
