import React from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

import NavBar from './navbar.component.jsx'
import NavConfig from './navLinks.config.js'

const Header = () =>
  <HeaderGrid>
    <RoutedNavBar />
  </HeaderGrid>

const RoutedNavBar = withRouter(props => <NavBar navLinks={NavConfig} activeLink={props.location.pathname} />)

const HeaderGrid = styled.header`
  display: grid;
  grid-template-columns: [left-margin-header] auto [center-header-col] auto [right-margin-header] auto;
  grid-column: left-margin / span 3;
  grid-row: header / span 1;
  z-index: 2;

  ${breakpoint('mobile')`
    grid-template-columns: [center-header-col] auto;
  `}

  ${breakpoint('tablet')`
    grid-template-columns: [left-margin-header] auto [center-header-col] auto [right-margin-header] auto;
  `}
`
export default Header
