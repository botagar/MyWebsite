import React from 'react'
import NavBar from './navbar.component.jsx'
import NavConfig from './navLinks.config.js'

const HeaderStyle = {
  display: 'grid',
  gridTemplateColumns: '[left-margin-header] auto [center-header-col] auto [right-margin-header] auto',
  gridColumn: 'center-content-col / span 1',
  gridRow: 'header / span 1'
}

const Header = () =>
  <header style={HeaderStyle}>
    <NavBar navLinks={NavConfig} />
  </header>

export default Header
