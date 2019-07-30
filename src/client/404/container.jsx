import React from 'react'
import styled from 'styled-components'

import ContentContainer from '../shared/styles/contentContainer'

const PageNotFound = () =>
  <MainContentContainer>
    <h1>You're Lost! Go Home.</h1>
  </MainContentContainer>

const MainContentContainer = styled(ContentContainer)`
  text-align: center;
  align-items: center;
  justify-content: center;  
`

export default PageNotFound
