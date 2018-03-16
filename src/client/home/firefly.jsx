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
    let fireflyElement = this.state.fireflyElement || tryGetFireflyElement(document, this.state.fireflyIndex)
    let fireflyStyleSheet = this.state.fireflyStyleSheet || tryGetAnimationSheet(document)
    let destX = generateRandomPos()
    let destY = generateRandomPos()

    if (fireflyElement && fireflyStyleSheet) {
      removeOldAnimation(this.state, fireflyStyleSheet)
      
      fireflyElement.style.removeProperty('animation')

      fireflyStyleSheet.insertRule(generateAnimationKeyframes(this.state, destX, destY), 0)

      fireflyElement.style.setProperty('animation', generateAnimationProperty(this.state))

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

const generateAnimationKeyframes = (state, destX, destY) => {
  return `@keyframes firefly-${state.fireflyIndex}-move-${state.moveCount} {
    0% { transform: translate(${state.position.currentX}vw, ${state.position.currentY}vh) }
    100% { transform: translate(${destX}vw, ${destY}vh) }
  }`
}

const generateAnimationProperty = state => {
  return `firefly-${state.fireflyIndex}-move-${state.moveCount} ${state.updateInterval}ms ease 1 0s normal forwards running`
}

const removeOldAnimation = (state, fireflyStyleSheet) => {
  let oldKeyframesIndex = tryGetOldAnimationIndex(fireflyStyleSheet, state)
  if (oldKeyframesIndex >= 0) {
    fireflyStyleSheet.deleteRule(oldKeyframesIndex)
  }
}

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
