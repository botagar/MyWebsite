import React from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

import NavBar from './navbar.component.jsx'
import NavConfig from './navLinks.config.js'

const Header = () =>
  <HeaderGrid>
    <NavBar navLinks={NavConfig} />
  </HeaderGrid>

const HeaderGrid = styled.header`
  display: grid;
  grid-template-columns: [left-margin-header] auto [center-header-col] auto [right-margin-header] auto;
  grid-column: center-content-col / span 1;
  grid-row: header / span 1;

  ${breakpoint('mobile')`
    grid-template-columns: [center-header-col] auto;
  `}

  ${breakpoint('tablet')`
    grid-template-columns: [left-margin-header] auto [center-header-col] auto [right-margin-header] auto;
  `}
`
export default Header
