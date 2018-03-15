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

  render () {
    return (
      <Jar>
        { _.times(5, index => { return <FireFly key={`firefly${index}`} index={index} /> }) }
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
