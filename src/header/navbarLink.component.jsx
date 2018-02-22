import React from 'react'
import { NavLink } from 'react-router-dom'

const NavLinkTextStyle = {
  // position: 'absolute',
  // top: '10px',
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

const NavImg = ({ image, altText }) => <img src={ image } alt={ altText } />

const NavigationLink = ({ uri, image, altText, displayText }) =>
  <NavLink to={ uri } activeClassName='active' style={ NavLinkStyle }>
    { image ? <NavImg image={ image } style={ NavImgStyle } altText={ altText } /> : '' }
    <h2 style={ NavLinkTextStyle }>{ displayText }</h2>
  </NavLink>

export default NavigationLink
