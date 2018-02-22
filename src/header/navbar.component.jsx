import React from 'react'
import { NavLink } from 'react-router-dom'
import _ from 'underscore'
import NavigationLink from './navbarLink.component.jsx'

const NavBarStyle = {
  border: '1px solid red',
  flexGrow: '3',
  display: 'flex',
  flexDirection: 'row-reverse'
}

const NavLinkContainerStyle = {
  display: 'inline-block'
}

const NavLinkStyle = {
  listStyleType: 'none',
  display: 'inline-block',
  position: 'relative',
  minWidth: '5vw',
  maxWidth: '10vw',
  height: '5vh',
  textAlign: 'center'
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
