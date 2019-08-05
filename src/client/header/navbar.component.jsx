import React, { Component } from 'react'
import styled from 'styled-components'

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
    this.setState({
      activeLink: this.navLinks.find(link => link.name === event.target.textContent)
    })
  }

  componentWillMount() {
    console.log('component will mount')
  }

  render() {
    return (
      <NavLinks>
        <LeftSliderSpace>
          <LeftSlider>
            {
              this.navLinks.map(link => {
                if (link.position < this.state.activeLink.position) {
                  return <NavLink
                    key={`navlink-${link.position}`}
                    link={link}
                    clickHandler={this.handleLinkClicked} />
                }
              })
            }
          </LeftSlider>
        </LeftSliderSpace>
        <SelectedLinkSpace>
          {
            <SelectedNavLink
              link={this.state.activeLink}
              clickHandler={this.handleLinkClicked} />
          }
        </SelectedLinkSpace>
        <RightSliderSpace>
          <RightSlider>
            {
              this.navLinks.map(link => {
                if (link.position > this.state.activeLink.position) {
                  return <NavLink
                    key={`navlink-${link.position}`}
                    link={link}
                    clickHandler={this.handleLinkClicked} />
                }
              })
            }
          </RightSlider>
        </RightSliderSpace>
      </NavLinks>
    )
  }
}

const NavLinks = styled.nav`
  grid-column: left-margin-header / span 3;
  grid-row: header / span 1;
  display: grid;
  grid-template-columns: [links-left] 45vw [link-center] 10vw [links-right] 45vw;
`

const SelectedNavLink = styled(NavLink)`
  font-family: 'Josefin Sans';
  font-size: 2em;
  color: #ffdb9e;
  opacity: 1;
  text-shadow: 
    #ff4d00 0 0 112px,
    #ffa916 0 0 48px,
    #ef9700 0 0 24px,          
    #ef9700 0 0 16px,
    #ef9700 0 0 4px;
  -webkit-text-stroke-width: 3px;
  -webkit-text-stroke-color: #ff6e00;
`

const SelectedLinkSpace = styled.div`
  grid-column: link-center / span 1;
  grid-row: header / span 1;
  text-align: center;
`

const LeftSliderSpace = styled.div`
  grid-column: links-left / span 1;
  grid-row: header / span 1;
  text-align: right;
`

const LeftSlider = styled.div`
  display: inline-flex;
  justify-content: flex-end;
  min-width: 5vmin;
`

const RightSliderSpace = styled.div`
  grid-column: links-right / span 1;
  grid-row: header / span 1;
`

const RightSlider = styled.div`
  display: inline-flex;
  justify-content: flex-start;
  min-width: 5vmin;
`

export default NavBar
