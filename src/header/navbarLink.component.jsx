import React from 'react'
import { NavLink } from 'react-router-dom'

const NavLinkTextStyle = {
  marginTop: '1.25vh',
  'WebkitTextStroke': '1px black'
}

const NavImgStyle = {
  maxWidth: '100%',
  maxHeight: '100%',
  position: 'relative'
}

const NavLinkStyle = {
  display: 'block'
}

const NavImg = ({image, altText}) => <img src={image} alt={altText} />

const NavigationLink = ({uri, image, altText, displayText}) =>
  <NavLink to={uri} activeClassName='active' style={NavLinkStyle}>
    { image ? <NavImg image={image} style={NavImgStyle} altText={altText} /> : '' }
    <p style={NavLinkTextStyle}>{displayText}</p>
  </NavLink>

export default NavigationLink
