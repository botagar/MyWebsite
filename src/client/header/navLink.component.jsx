import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const NavigationLink = ({uri, image, altText, displayText}) =>
  <StyledNavLink to={uri} activeClassName='active'>
    { image ? <NavLinkImg src={image} alt={altText} style={NavImgStyle} /> : '' }
    <NavLinkText>{displayText}</NavLinkText>
  </StyledNavLink>

const NavLinkText = styled.p`
  margin-top: 1.5vh;
  margin-bottom: 1.5vh;
  color: white;
  font-size: 1.2em;
  font-weight: bold;
`
const NavLinkImg = styled.img`
  maxWidth: 100%;
  maxHeight: 100%;
  position: relative;
`
const StyledNavLink = styled(NavLink)`
  display: block;
`

export default NavigationLink
