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
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() { }

  componentDidMount() {
    log.fatal('fatal')
    log.error('error')
    log.warn('warn')
    log.info('info')
    log.debug('debug')
    log.verbose('verbose')
  }

  componentWillReceiveProps(nextProps) {}

  render() {
    return (
      <AppRoot>
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
  grid-template-rows: [header] 5vh [center-content-row] auto;
  height: 100vh;
  background: repeating-linear-gradient(90deg, rgba(167, 167, 167, 0.13) 0px, rgba(167, 167, 167, 0.13) 69px,rgba(143, 143, 143, 0.13) 69px, rgba(143, 143, 143, 0.13) 138px),repeating-linear-gradient(90deg, rgba(77, 77, 77, 0.23) 0px, rgba(77, 77, 77, 0.23) 90px,rgba(24, 24, 24, 0.23) 90px, rgba(24, 24, 24, 0.23) 180px),repeating-linear-gradient(0, rgba(125, 125, 125, 0.22) 0px, rgba(125, 125, 125, 0.22) 62px,rgba(8, 8, 8, 0.22) 62px, rgba(8, 8, 8, 0.22) 124px),repeating-linear-gradient(0, rgba(177, 177, 177, 0.24) 0px, rgba(177, 177, 177, 0.24) 54px,rgba(62, 62, 62, 0.24) 54px, rgba(62, 62, 62, 0.24) 108px),linear-gradient(90deg, hsl(113,0%,3%),hsl(113,0%,3%));

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
  return {}
}

const mapDispatchToEvents = dispatch => {
  return {}
}

export default withRouter(connect(mapStateToProps, mapDispatchToEvents)(_App))
