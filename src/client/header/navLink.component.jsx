import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

const NavigationLink = ({uri, image, altText, displayText, active}) => {
  let _NavLinkText = NavLinkText
  if (active) { _NavLinkText = ActiveNavlinkText }

  return (
    <StyledNavLink to={uri} >
      { image ? <NavLinkImg src={image} alt={altText} style={NavImgStyle} /> : '' }
      <_NavLinkText>{displayText}</_NavLinkText>
    </StyledNavLink>
  )
}
  

const NavLinkText = styled.p`
  margin-top: 1.5vh;
  margin-bottom: 1.5vh;
  color: white;
  font-weight: bold;

  ${breakpoint('mobile')`
    font-size: 1em;
  `}

  ${breakpoint('tablet')`
    font-size: 1.2em;
  `}
`
const ActiveNavlinkText = NavLinkText.extend`
  color: black;
`
const NavLinkImg = styled.img`
  maxWidth: 100%;
  maxHeight: 100%;
  position: relative;
`
const StyledNavLink = styled(NavLink)`
  display: block;
  text-decoration: none;
`

export default NavigationLink
