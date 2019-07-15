import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const NavigationLink = ({ link, clickHandler }) => {
  let { URI, name } = link
  let altText = 'dont hard code me!'
  return (
    <StyledNavLink to={URI} onClick={clickHandler} alt={altText} >
      {name}
    </StyledNavLink>
  )
}

const StyledNavLink = styled(NavLink)`
  display: block;
  text-decoration: none;
  font-size: 1.2em;
  color:inherit;
  text-decoration: none;
  padding: 6px 5px;
  border-top: 3px solid black;
  border-bottom: 3px solid black;
  box-shadow: inset 0 0 0 3000px rgba(255,255,255,0.3);
  mix-blend-mode: darken;

  &:before {
    background-color: white;
    box-shadow: inset 0 0 0 3000px rgba(255,255,255,0.3);
    filter: blur(10px);
  }
`

export default NavigationLink
