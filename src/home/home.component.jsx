import React from 'react'
import NavBar from '../common/navbar.component.jsx'
import NavConfig from '../common/navLinks.config.js'
import GithubRepo from '../github/github.component.jsx'

const Home = (props) =>
  <div>
    <NavBar navLinks={NavConfig} />
    <h1>Home</h1>
    <GithubRepo />
  </div>

Home.propTypes = {
  // Import Proptypes to start asserting props (import PropTypes from 'prop-types')
}

export default Home
