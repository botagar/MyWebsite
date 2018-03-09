import React from 'react'

import contentContainerSize from '../shared/styles/contentContainer'

const contentContainerStyle = {
  ...contentContainerSize,
  textAlign: 'center',
  alignItems: 'center'
}

const PageNotFound = () =>
  <div style={contentContainerStyle}>
    <h1>You're Lost! Go Home.</h1>
  </div>

export default PageNotFound
