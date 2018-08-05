import React, { Component } from 'react'
import styled from 'styled-components'

class BackgroundScene extends Component {
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <SceneCanvas>
        <svg height="400" width="400">
          <Wall width="40" height="40" x="200" y="200"  />
        </svg>
      </SceneCanvas>
    )
  }
}

const SceneCanvas = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 0;
  width: 100vw;
  height: 100vh;
`

const Wall = styled.rect`
  fill:rgb(255,0,255);
`

export default BackgroundScene
