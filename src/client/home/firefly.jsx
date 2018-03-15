import React from 'react'
import styled, { keyframes } from 'styled-components'

class firefly extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fireflyIndex: props.index,
      updateInterval: props.updateInterval || 2000 + Math.round(Math.random() * 5000),
      position: {
        x: Math.round(Math.random() * 90) + 5,
        y: Math.round(Math.random() * 90) + 5,
        px: props.x || Math.round(Math.random() * 90) + 5,
        py: props.y || Math.round(Math.random() * 90) + 5
      }
    }
    this.animationTick = this.animationTick.bind(this)
  }

  componentDidMount () {
    this.interval = setInterval(this.animationTick, this.state.updateInterval)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  animationTick () {
    this.setState((prevState, props) => {
      let scaledX = Math.round(Math.random() * 90) + 5
      let scaledY = Math.round(Math.random() * 90) + 5
      return {
        position: {
          x: scaledX,
          y: scaledY,
          px: prevState.position.x || scaledX,
          py: prevState.position.y || scaledY
        }
      }
    })
  }

  render () {
    const ffIndex = this.state.fireflyIndex
    const position = this.state.position
    let testStyle = {}

    // testStyle[`--ff${ffIndex}-ptop`] = position.px
    // testStyle[`--ff${ffIndex}-pleft`] = position.py
    // testStyle[`--ff${ffIndex}-left`] = position.x
    // testStyle[`--ff${ffIndex}-top`] = position.y
    
    return <FireFly style={testStyle} fireflyIndex={this.state.fireflyIndex} position={this.state.position} ui={this.state.updateInterval} />
  }
}

const move = props => {
  let fireflyIndex = props.ffi
  return keyframes`
    0% { -webkit-transform: translateX(var(--ff${fireflyIndex}-pleft)) translateY(var(--ff${fireflyIndex}-ptop)); }
    100% { -webkit-transform: translateX(var(--ff${fireflyIndex}-left)) translateY(var(--ff${fireflyIndex}-top)); }
  `
}

// 0% { -webkit-transform: translateX(${props.pleft}) translateY(${props.ptop}); }
// 100% { -webkit-transform: translateX(${props.left}) translateY(${props.top}); }

const FireFly = styled.div.attrs({
  ffi: props => props.fireflyIndex,
  ui: props => props.ui,
  fftop: props => `${props.position.y}px`,
  ffleft: props => `${props.position.x}px`,
  ptop: props => `${props.position.py}px`,
  pleft: props => `${props.position.px}px`,
})`
  width: 2px;
  height: 2px;
  position: absolute;
  background: #0ff;
  box-shadow: 0px 0px 10px 2px #8ff;
  border-radius: 50% 50%;
  z-index: 1;
  opacity: 1;
  --ff${props => props.ffi}-left: ${props => props.fftop};
  --ff${props => props.ffi}-top: ${props => props.ffleft};
  --ff${props => props.ffi}-pleft: ${props => props.pleft};
  --ff${props => props.ffi}-ptop: ${props => props.ptop};
  animation: ${move} ${props => props.ui}ms infinite;
`

// top: ${props => props.top};
// left: ${props => props.left};



export default firefly
