import React from 'react'
import { NavLink } from 'react-router-dom'
import NavBar from './navbar.component.jsx'
import NavConfig from './navLinks.config.js'

const HeaderStyle = {
  display: 'grid',
  gridTemplateColumns: '[left-margin-header] auto [center-header-col] auto [right-margin-header] auto',
  gridColumn: 'center-content-col / span 1',
  gridRow: 'header / span 1'
  // display: 'flex',
  // flexDirection: 'row'
}

const HeaderLogo = {
  // display: 'inline-block',
  // height: '100px',
  // width: '100px',
  // cursor: 'pointer'
}

const HeaderLogoImg = {
  // maxWidth: '100%',
  // maxHeight: '100%',
  // position: 'relative'
}

const Header = () =>
<header style={ HeaderStyle }>
  {/* <NavLink to={'/'} style={ HeaderLogo }>
    <img
      src='/media/images/placeholder.png'
      style={ HeaderLogoImg }
      alt='Logo' />
  </NavLink> */}
  <NavBar navLinks={ NavConfig } />
</header>

export default Header