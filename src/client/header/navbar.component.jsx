import React, { Component } from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

import NavLink from './navLink.component.jsx'

class NavBar extends Component {
  constructor({ navLinks, activeLink }) {
    super()
    this.navLinks = navLinks;
    this.state = {
      activeLink: navLinks.find(link => link.URI === activeLink)
    }

    this.handleLinkClicked = this.handleLinkClicked.bind(this)
  }

  handleLinkClicked(event) {
    console.log('Link clicked:', event.target.textContent)
    this.setState({
      activeLink: this.navLinks.find(link => link.name === event.target.textContent)
    })
  }

  componentWillMount() {
    console.log(this.state.activeLink)
    console.log(this.navLinks)
  }

  render() {
    console.log('state', this.state)
    return (
      <NavLinks>
        <NavLinksLeft>
          {
            this.navLinks.map(link => {
              if (link.position < this.state.activeLink.position) {
                return <NavLink
                  link={link}
                  clickHandler={this.handleLinkClicked} />
              }
            })
          }
        </NavLinksLeft>
        <SelectedLink>
          {
            <NavLink
              link={this.state.activeLink}
              clickHandler={this.handleLinkClicked} />
          }
        </SelectedLink>
        <NavLinksRight>
          {
            this.navLinks.map(link => {
              if (link.position > this.state.activeLink.position) {
                return <NavLink
                  link={link}
                  clickHandler={this.handleLinkClicked} />
              }
            })
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
  text-align: center;
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
