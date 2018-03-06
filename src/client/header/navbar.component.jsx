import React from 'react'
import _ from 'underscore'
import styled from 'styled-components'

import NavLink from './navLink.component.jsx'

const NavBar = ({navLinks}) =>
  <NavBarInGrid>
    <NavLinks>
      {
        _.map(navLinks, navLinkInfo => {
          return <NavLinkContainer key={navLinkInfo.name}>
            <NavLink
              uri={navLinkInfo.URI}
              image={navLinkInfo.image}
              displayText={navLinkInfo.name}
              altText={'placeholder alt text'} />
          </NavLinkContainer>
        })
      }
    </NavLinks>
  </NavBarInGrid>

const NavBarInGrid = styled.div`
  grid-column: center-header-col / span 1
  grid-row: header / span 1
`
const NavLinks = styled.ul`
  display: flex
  justify-content: space-evenly
`
const NavLinkContainer = styled.li`
  list-style-type: none
  display: inline-block
`

export default NavBar
