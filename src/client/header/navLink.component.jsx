import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

const NavigationLink = ({ link, clickHandler }) => {
  console.log(link)
  let { URI, image, name, position } = link
  let altText = 'dont hardcode me!'
  return (
    <StyledNavLink to={URI} onClick={clickHandler} >
      {image ? <NavLinkImg src={image} alt={altText} style={NavImgStyle} /> : ''}
      <NavLinkText link-id={position}>{name}</NavLinkText>
    </StyledNavLink>
  )
}

const NavLinkText = styled.p`
  margin-top: 1.5vh;
  margin-bottom: 1.5vh;
  color: white;
  font-weight: bold;
  text-shadow: 2px 2px 4px #000000;

  ${breakpoint('mobile')`
    font-size: 1em;
  `}

  ${breakpoint('tablet')`
    font-size: 1.2em;
  `}
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
