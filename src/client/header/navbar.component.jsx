import React from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

import NavLink from './navLink.component.jsx'
import SelectedPage from './activePage.component.jsx'

const NavBar = ({ navLinks, activeLink }) => {
  let linkBelongsOnLeft = true

  return (
    <NavLinksWrapper>
      <NavLinksLeft>
        {
          navLinks.map(navLinkInfo => {
            if (navLinkInfo.URI === activeLink) {
              linkBelongsOnLeft = false
            } else if (linkBelongsOnLeft) {
              return <NavLink
                uri={navLinkInfo.URI}
                image={navLinkInfo.image}
                displayText={navLinkInfo.name}
                altText={'placeholder alt text'} />
            }
          })
        }
      </NavLinksLeft>
      <SelectedLinkWrapper>
        {
          navLinks.map(navLinkInfo => {
            if (navLinkInfo.URI === activeLink) {
              return <SelectedPage pageName={navLinkInfo.name} />
            } 
          })
        }
      </SelectedLinkWrapper>
      <NavLinksRight>
        {
          navLinks.map(navLinkInfo => {
            if (!linkBelongsOnLeft && navLinkInfo.URI !== activeLink) {
              return <NavLink
                uri={navLinkInfo.URI}
                image={navLinkInfo.image}
                displayText={navLinkInfo.name}
                altText={'placeholder alt text'} />
            }
          })
        }
      </NavLinksRight>
      
      {/* <NavLinks>
        {
          navLinks.map(navLinkInfo => {
            if (navLinkInfo.URI === activeLink) {
              linkBelongsOnLeft = false
              return <SelectedPage pageName={navLinkInfo.name} />
            } else if (linkBelongsOnLeft) {
              return <NavLink
                uri={navLinkInfo.URI}
                image={navLinkInfo.image}
                displayText={navLinkInfo.name}
                altText={'placeholder alt text'} />
            } else {
              return <NavLink
                uri={navLinkInfo.URI}
                image={navLinkInfo.image}
                displayText={navLinkInfo.name}
                altText={'placeholder alt text'} />
            }
          })
        }
      </NavLinks> */}
    </NavLinksWrapper>)
}

const NavLinksWrapper = styled.nav`
  grid-column: center-header-col / span 1;
  grid-row: header / span 1;
  display: grid;
  grid-template-columns: [links-left] auto [link-center] 20vwmin [links-right] auto;
`

const SelectedLinkWrapper = styled.div`
  grid-column: link-center / span 1;
`

const NavLinksLeft = styled.ul`
  grid-column: links-left / span 1;
  display: flex;
  justify-content: flex-end;
`

const NavLinksRight = styled.ul`
  grid-column: links-right / span 1;
  display: flex;
  justify-content: flex-start;
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
