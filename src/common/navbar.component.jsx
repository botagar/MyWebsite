import React from 'react'
import { NavLink } from 'react-router-dom'
import _ from 'underscore'
import NavigationLink from './navbarLink.component.jsx'

const NavBarStyle = {
  border: '1px solid red'
}

const NavLogoStyle = {
  display: 'inline-block',
  height: '100px',
  width: '100px',
  cursor: 'pointer'
}

const NavImgStyle = {
  maxWidth: '100%',
  maxHeight: '100%',
  position: 'relative'
}

const NavLinkContainerStyle = {
  display: 'inline-block'
}

const NavLinkStyle = {
  border: '1px solid green',
  listStyleType: 'none',
  display: 'inline-block',
  position: 'relative',
  margin: '0 20px 0 0',
  width: '10vw',
  height: '5vh'
}

const NavBar = ({ navLinks }) =>
  <div className='nav' style={NavBarStyle}>
    <NavLink to={'/'} style={NavLogoStyle}>
      <img
        src='https://dhost1.mmomiss.com/uploads/201705/albion-logistik.png'
        style={NavImgStyle}
        alt='Logo' />
    </NavLink>

    <ul className='nav-links' style={NavLinkContainerStyle}>
      {
        _.map(navLinks, (navLinkInfo) => {
          return <li key={navLinkInfo.name} style={NavLinkStyle}>
            <NavigationLink
              uri={navLinkInfo.URI}
              image={navLinkInfo.image}
              displayText={navLinkInfo.name}
              altText={'placeholder alt text'} />
          </li>
        })
      }
    </ul>
  </div>

export default NavBar
