import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

import Header from './header/container.jsx'
import Home from './home/container.jsx'
import Blog from './blog/container.jsx'
import About from './about/container.jsx'
import ThreeJsExperiment from './threeJS/main.container.jsx'
import DefaultPage from './404/container.jsx'

class _App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      styling: {
        backgroundImg: props.backgroundImg
      }
    }
  }

  componentWillMount () {}

  componentDidMount() {
    log.fatal('fatal')
    log.error('error')
    log.warn('warn')
    log.info('info')
    log.debug('debug')
    log.verbose('verbose')
  }

  componentWillReceiveProps (nextProps) {
    this.setState((prevState, props) => {
      return {
        styling: {
          backgroundImg: props.backgroundImg
        }
      }
    })
  }

  render () {
    return (
      <AppRoot backgroundImg={this.state.styling.backgroundImg}>
        <Header />
        <Switch>
          <Route key={'root'} exact path={'/'} component={Home} />
          <Route key={'about'} exact path={'/about'} component={About} />
          <Route key={'three'} exact path={'/three'} component={ThreeJsExperiment} />
          <Route key={'blog'} exact path={'/blog'} component={Blog} />
          <Route key={'404'} component={DefaultPage} />
        </Switch>
      </AppRoot>
    )
  }
}

const AppRoot = styled.div`
  display: grid;
  grid-template-rows: [header] 10vh [center-content-row] auto;
  height: 100vh;
  background-image: url('${props => props.backgroundImg}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  ${breakpoint('mobile')`
    grid-template-columns: [center-content-col] auto;
  `}

  ${breakpoint('tablet')`
    grid-template-columns: [left-margin] 2.5vw [center-content-col] auto [right-margin] 2.5vw;
  `}

  ${breakpoint('desktop')`
    grid-template-columns: [left-margin] 10vw [center-content-col] auto [right-margin] 10vw;
  `}
`

const mapStateToProps = state => {
  return {
    backgroundImg: state.Shared.backgroundImg
  }
}

const mapDispatchToEvents = dispatch => {
  return {}
}

export default withRouter(connect(mapStateToProps, mapDispatchToEvents)(_App))
