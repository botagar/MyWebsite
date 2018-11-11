import React from 'react'
import styled from 'styled-components'

const ActivePageLense = ({ pageName }) =>
  <ActivePageWindow>
    <p>{pageName}</p>
  </ActivePageWindow>

const ActivePageWindow = styled.div`

`

export default ActivePageLense
