import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

const NavigationLink = ({ link, clickHandler }) => {
  let { URI, image, name, position } = link
  let altText = 'dont hardcode me!'
  return (
    <StyledNavLink to={URI} onClick={clickHandler} >
      <FrostedGlass />
      <TextMask>{name}</TextMask>
    </StyledNavLink>
  )
}

const TextMask = styled.p`
  mix-blend-mode: lighten;
`

const FrostedGlass = styled.div`
  box-shadow: inset 0 0 0 3000px rgba(255,255,255,0.3);
  #background: #fff;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  filter: blur(1px);

  #&:before {
  #  background-color: white;
  #  box-shadow: inset 0 0 0 3000px rgba(255,255,255,0.3);
  #  filter: blur(10px);
  #}
`

const StyledNavLink = styled(NavLink)`
  display: block;
  position: relative;
  text-decoration: none;
  font-size: 1.2em;
  color:inherit;
  text-decoration: none;
  padding: 6px 5px;
  border-top: 3px solid black;
  border-bottom: 3px solid black;
`

export default NavigationLink
