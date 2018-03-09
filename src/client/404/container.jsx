import React from 'react'

import contentContainerSize from '../shared/styles/contentContainer'

const contentContainerStyle = {
  ...contentContainerSize,
  textAlign: 'center',
  alignItems: 'center'
}

const PageNotFound = () =>
  <div style={contentContainerStyle}>
    <h1>Uh Oh... You've gotten lost!</h1>
  </div>

export default PageNotFound
