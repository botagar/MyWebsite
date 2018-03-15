import React from 'react'
import styled, { keyframes } from 'styled-components'
import _ from 'underscore'

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
    this.animationState = {
      moveCount: 0
    }
    this.animationTick = this.animationTick.bind(this)
  }

  componentDidMount () {
    console.info(`FF${this.state.fireflyIndex} is set to an update interval of ${this.state.updateInterval}ms`)
    this.interval = setInterval(this.animationTick, this.state.updateInterval)
    var fireflyElement = document.getElementById(`fire-fly-${this.state.fireflyIndex}`)
    var fireflyStyleSheet = _.find(document.styleSheets, styleSheet => { return styleSheet.title === 'firefly-animations'})
    console.log(fireflyElement)
    this.animationTick()
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  animationTick () {
    let ffIndex = this.state.fireflyIndex
    let position = this.state.position
    
    let moveCount = this.animationState.moveCount
    let currentX = this.animationState.cx || generateRandomPos()
    let currentY = this.animationState.cy || generateRandomPos()
    let destX = generateRandomPos()
    let destY = generateRandomPos()

    var fireflyElement = document.getElementById(`fire-fly-${ffIndex}`)
    var fireflyStyleSheet = _.find(document.styleSheets, styleSheet => { return styleSheet.title === 'firefly-animations'})
    console.debug(fireflyStyleSheet)

    if (fireflyElement && fireflyStyleSheet) {
      let existingAnimationRuleIndex = _.findIndex(fireflyStyleSheet.cssRules, rule => { 
        return rule.name === `firefly-${ffIndex}-move-${moveCount - 1 < 0 ? 0 : moveCount - 1}` 
      })
      if (existingAnimationRuleIndex >= 0) {
        fireflyStyleSheet.deleteRule(existingAnimationRuleIndex)
      }
      
      fireflyElement.style.removeProperty('animation')

      fireflyStyleSheet.insertRule(`@keyframes firefly-${ffIndex}-move-${moveCount} {
        0% { transform: translate(${currentX}vw, ${currentY}vh) }
        100% { transform: translate(${destX}vw, ${destY}vh) }
      }`, 0)

      fireflyElement.style.setProperty('animation', `firefly-${ffIndex}-move-${moveCount} ${this.state.updateInterval}ms ease 1 0s normal forwards`)
      fireflyElement.style.setProperty('animation-play-state', 'running')

      this.animationState.cx = destX
      this.animationState.cy = destY
      this.animationState.moveCount += 1
    }
  }

  render () {
    const ffIndex = this.state.fireflyIndex

    return <FireFly id={`fire-fly-${ffIndex}`} fireflyIndex={ffIndex} ui={this.state.updateInterval} />
  }
}

const generateRandomPos = () => Math.round(Math.random() * 90)

const FireFly = styled.div.attrs({
  ffi: props => props.fireflyIndex,
  ui: props => props.ui
})`
  width: 2px;
  height: 2px;
  position: absolute;
  background: #0ff;
  box-shadow: 0px 0px 10px 2px #8ff;
  border-radius: 50% 50%;
  z-index: 1;
  opacity: 1;
`
// animation: ${move} ${props => props.ui}ms ease infinite 0s normal forwards;
// animation-play-state: running;
// top: ${props => props.top};
// left: ${props => props.left};



export default firefly
