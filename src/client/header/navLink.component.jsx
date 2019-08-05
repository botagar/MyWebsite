import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const NavigationLink = ({ link, clickHandler, className  }) => {
  let { URI, image, name, position } = link
  let altText = 'dont hardcode me!'
  return (
    <StyledNavLink className={className} to={URI} onClick={clickHandler} >
      {name}
    </StyledNavLink>
  )
}

const StyledNavLink = styled(NavLink)`
  display: block;
  position: relative;
  text-decoration: none;
  font-size: 1.2em;
  color:inherit;
  text-decoration: none;
  padding: 6px 5px;

  &:hover {
    color: pink;
  }
`

export default NavigationLink
