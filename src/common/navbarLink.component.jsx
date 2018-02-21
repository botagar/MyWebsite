import React from 'react'
import { NavLink } from 'react-router-dom'

const NavLinkTextStyle = {
  position: 'absolute',
  top: '10px',
  'WebkitTextStroke': '1px white'
}

const NavImgStyle = {
  maxWidth: '100%',
  maxHeight: '100%',
  position: 'relative'
}

const NavigationLink = ({uri, image, altText, displayText}) => // This is destructuring props
  <NavLink to={uri} activeClassName='active'>
    <img
      src={image}
      style={NavImgStyle}
      alt={altText} />
    <h2 style={NavLinkTextStyle}>{displayText}</h2>
  </NavLink>

export default NavigationLink
