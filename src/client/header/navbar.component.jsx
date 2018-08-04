import React from 'react'
import _ from 'underscore'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

import NavLink from './navLink.component.jsx'
import SunShaft from './sunshafts.component.jsx'

const NavBar = ({navLinks, activeLink}) =>
  <NavBarInGrid>
    <NavLinks>
      {
        _.map(navLinks, navLinkInfo => {
          return (
            <NavLinkContainer key={navLinkInfo.name}>
              { navLinkInfo.URI === activeLink ? <SunShaft /> : null }
              <NavLink
                uri={navLinkInfo.URI}
                image={navLinkInfo.image}
                displayText={navLinkInfo.name}
                altText={'placeholder alt text'} />
            </NavLinkContainer>
          )
        })
      }
    </NavLinks>
  </NavBarInGrid>

const NavBarInGrid = styled.nav`
  grid-column: center-header-col / span 1;
  grid-row: header / span 1;
`
const NavLinks = styled.ul`
  display: flex;
  justify-content: space-evenly;

  ${breakpoint('mobile')`
    width: 100vw;
  `}

  ${breakpoint('tablet')`
    width: auto;
  `}
`

const NavLinkContainer = styled.li`
  list-style-type: none;
  display: inline-block;
  margin-top: -20px;
  padding: 20px 5px 0 5px;
  position: relative;
  z-index: 0;
`

const ActiveNavLinkContainer = NavLinkContainer.extend`
`

export default NavBar
