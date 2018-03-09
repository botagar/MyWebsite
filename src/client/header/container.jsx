import React from 'react'
import styled from 'styled-components'

import NavBar from './navbar.component.jsx'
import NavConfig from './navLinks.config.js'

const HeaderGrid = styled.header`
  display: grid;
  grid-template-columns: [left-margin-header] auto [center-header-col] auto [right-margin-header] auto;
  grid-column: center-content-col / span 1;
  grid-row: header / span 1;
`

const Header = () =>
  <HeaderGrid>
    <NavBar navLinks={NavConfig} />
  </HeaderGrid>

export default Header
