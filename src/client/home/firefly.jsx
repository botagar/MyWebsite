import React from 'react'
import styled, { keyframes } from 'styled-components'
import _ from 'underscore'

class firefly extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fireflyIndex: props.index,
      fireflyElement: null,
      fireflyStyleSheet: null,
      moveCount: 0,
      updateInterval: props.updateInterval || 2000 + Math.round(Math.random() * 5000),
      position: {
        currentX: props.x || generateRandomPos(),
        currentY: props.y || generateRandomPos()
      }
    }
    this.animationState = {
      moveCount: 0
    }
    this.animationTick = this.animationTick.bind(this)
  }

  componentDidMount () {
    this.interval = setInterval(this.animationTick, this.state.updateInterval)
    this.animationTick()
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  animationTick () {
    let ffIndex = this.state.fireflyIndex
    let position = this.state.position
    let fireflyElement = this.state.fireflyElement || tryGetFireflyElement(document, this.state.fireflyIndex)
    let fireflyStyleSheet = this.state.fireflyStyleSheet || tryGetAnimationSheet(document)
    let moveCount = this.state.moveCount
    let destX = generateRandomPos()
    let destY = generateRandomPos()

    if (fireflyElement && fireflyStyleSheet) {
      let oldKeyframesIndex = tryGetOldAnimationIndex(fireflyStyleSheet, this.state)
      if (oldKeyframesIndex >= 0) {
        fireflyStyleSheet.deleteRule(oldKeyframesIndex)
      }
      
      fireflyElement.style.removeProperty('animation')

      fireflyStyleSheet.insertRule(`@keyframes firefly-${ffIndex}-move-${moveCount} {
        0% { transform: translate(${position.currentX}vw, ${position.currentY}vh) }
        100% { transform: translate(${destX}vw, ${destY}vh) }
      }`, 0)

      fireflyElement.style.setProperty('animation', `firefly-${ffIndex}-move-${moveCount} ${this.state.updateInterval}ms ease 1 0s normal forwards running`)

      this.setState((prevState, props) => {
        return {
          moveCount: prevState.moveCount + 1,
          position: {
            currentX: destX,
            currentY: destY
          }
        }
      })
    }
  }

  render () {
    const ffIndex = this.state.fireflyIndex
    return <FireFly id={`fire-fly-${ffIndex}`} fireflyIndex={ffIndex} ui={this.state.updateInterval} />
  }
}

const generateRandomPos = (scale = 1) => Math.round(Math.random() * 90) * scale

const tryGetFireflyElement = (document, fireflyIndex) => document.getElementById(`fire-fly-${fireflyIndex}`)

const tryGetAnimationSheet = document => _.find(document.styleSheets, styleSheet => styleSheet.title === 'firefly-animations')

const tryGetOldAnimationIndex = (fireflyStyleSheet, state) => _.findIndex(fireflyStyleSheet.cssRules, rule => { 
  return rule.name === `firefly-${state.fireflyIndex}-move-${state.moveCount - 1 < 0 ? 0 : state.moveCount - 1}` 
})

const FireFly = styled.div`
  width: 2px;
  height: 2px;
  position: absolute;
  background: #0ff;
  box-shadow: 0px 0px 10px 2px #8ff;
  border-radius: 50% 50%;
  z-index: 1;
  opacity: 1;
`

export default firefly
