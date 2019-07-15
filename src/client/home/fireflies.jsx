import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import _ from 'underscore'

import FireFly from './firefly.jsx'

class FireFlies extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {
    let ffStyleSheet = _.find(document.styleSheets, styleSheet => { return styleSheet.title === 'firefly-animations'})
    if (!ffStyleSheet) {
      let style = document.createElement('style');
      style.id = 'firefly-animations'
      style.type = 'text/css'
      style.title = 'firefly-animations'
      document.head.appendChild(style)
    }
  }

  render () {
    return (
      <Jar id={'firefly-jar'}>
        { _.times(10, index => { return <FireFly key={`firefly${index}`} index={index} /> }) }
      </Jar>
    )
  }
}

const Jar = styled.div`
  position: absolute;
  top: 5vh;
  left: 5vw;
  height: 90vh;
  width: 90vw;
  z-index: 0;
`

export default FireFlies
