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
      <NavLinkText>{name}</NavLinkText>
    </StyledNavLink>
  )
}

const NavLinkText = styled.p`
  color: black;

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
  padding: 6px 5px;
  border-top: 3px solid black;
  border-bottom: 3px solid black;
`

export default NavigationLink
