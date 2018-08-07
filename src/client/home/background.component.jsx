import React, { Component } from 'react'
import styled from 'styled-components'

class BackgroundScene extends Component {
  constructor (props) {
    super(props)

    this.state = {
      height: 0,
      width: 0
    }

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
  }

  componentDidMount() {
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions)
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions)
  }

  updateWindowDimensions() {
    console.log('width', window.innerWidth, 'height', window.innerHeight)
    this.setState({ width: window.innerWidth, height: window.innerHeight })
  }

  render() {
    let sceneWidth = this.state.width
    let sceneHeight = this.state.height
    let centerWallWidth = (sceneWidth * 0.7) < 1024 ? 1024 : sceneWidth * 0.7
    let centerWallHeight = sceneHeight * 0.7
    return (
      <SceneCanvas>
        <svg width={ sceneWidth } height={ sceneHeight } >
          <Wall width={ centerWallWidth } height={ centerWallHeight } x={ (sceneWidth-centerWallWidth)/2 } y="0"  />
          <Wall width={ sceneWidth-centerWallWidth } height={ centerWallHeight } 
            x="0" y="0" transform="skewY(-30)" />
          <Wall width={ sceneWidth-centerWallWidth } height={ centerWallHeight } 
            x={ (sceneWidth/2)+(centerWallWidth/2) } y="0" transform="" />
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
  fill:rgb(0,0,255);
`

export default BackgroundScene
