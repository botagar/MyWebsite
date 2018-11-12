import React, { Component } from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

import NavLink from './navLink.component.jsx'

class NavBar extends Component {
  constructor({ navLinks, activeLink }) {
    super()
    this.state = {
      navLinks: {
        allLinks: navLinks,
        layout: {
          onTheLeft: [],
          inTheMiddle: navLinks.find(linkUnderInspection => linkUnderInspection.URI === activeLink),
          onTheRight: navLinks
        }
      }
    }
  }

  render() {
    console.log(this.state.navLinks)
    return (
      <NavLinks>
        <NavLinksLeft>
          {
            this.state.navLinks.layout.onTheLeft.map(link => 
              <NavLink
                uri={link.URI}
                image={link.image}
                displayText={link.name}
                altText={'placeholder alt text'} />
            )
          }
        </NavLinksLeft>
        <SelectedLink>
          <p>
            {
              this.state.navLinks.layout.inTheMiddle.name
            }
          </p>
        </SelectedLink>
        <NavLinksRight>
          {
            this.state.navLinks.layout.onTheRight.map(link => 
              <NavLink
                uri={link.URI}
                image={link.image}
                displayText={link.name}
                altText={'placeholder alt text'} />
            )
          }
        </NavLinksRight>
      </NavLinks>
    )
  }
}

const NavLinks = styled.nav`
  grid-column: center-header-col / span 1;
  grid-row: header / span 1;
  display: grid;
  grid-template-columns: [links-left] auto [link-center] 20vw [links-right] auto;
  border: 1px solid red;
`

const SelectedLink = styled.div`
  grid-column: link-center / span 1;
  grid-row: header / span 1;
  border: 1px solid blue;
`

const NavLinksLeft = styled.ul`
  grid-column: links-left / span 1;
  grid-row: header / span 1;
  display: flex;
  justify-content: flex-end;
  border: 1px solid green;
`

const NavLinksRight = styled.ul`
  grid-column: links-right / span 1;
  grid-row: header / span 1;
  display: flex;
  justify-content: flex-start;
  border: 1px solid orange;
`

export default NavBar
