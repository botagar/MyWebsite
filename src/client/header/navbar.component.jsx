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
            <LeftSliderEnd width='50px' height='37px'>
              <EndBar d='M 49,01 C 25,01 35,15 2,15' />
              <EndBar d='M 49,36 C 25,36 35,22 2,22' />
            </LeftSliderEnd>
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
        <SelectedLink>
          {
            <NavLink
              link={this.state.activeLink}
              clickHandler={this.handleLinkClicked} />
          }
        </SelectedLink>
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
            <RightSliderEnd width='50px' height='37px'>
              <EndBar d='M 0,01 C 25,01 15,15 48,15' />
              <EndBar d='M 0,36 C 25,36 15,22 48,22' />
            </RightSliderEnd>
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

const SelectedLink = styled.div`
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

const LeftSliderEnd = styled.svg`

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

const RightSliderEnd = styled.svg`

`

const EndBar = styled.path`
  fill: none;
  stroke: black;
  stroke-width: 3;
  stroke-linecap: round;
`

export default NavBar
