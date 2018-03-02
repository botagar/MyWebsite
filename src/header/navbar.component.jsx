import React from 'react'
import { NavLink } from 'react-router-dom'
import _ from 'underscore'
import NavigationLink from './navbarLink.component.jsx'

const NavBarStyle = {
  gridColumnStart: 'center-header-col',
  gridRowStart: 'header',
}

const NavLinkContainerStyle = {
  display: 'flex',
  justifyContent: 'space-evenly',
}

const NavLinkStyle = {
  listStyleType: 'none',
  display: 'inline-block',
}

const NavBar = ({ navLinks }) =>
  <div className='nav' style={ NavBarStyle }>
    <ul className='nav-links' style={ NavLinkContainerStyle }>
      {
        _.map(navLinks, navLinkInfo => {
          return <li key={ navLinkInfo.name } style={ NavLinkStyle }>
            <NavigationLink
              uri={ navLinkInfo.URI }
              image={ navLinkInfo.image }
              displayText={ navLinkInfo.name }
              altText={'placeholder alt text'} />
          </li>
        })
      }
    </ul>
  </div>

export default NavBar
