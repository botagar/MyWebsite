import React from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'

import Header from './header/container.jsx'
import Home from './home/container.jsx'
import Blog from './blog/container.jsx'
import About from './about/container.jsx'
import DefaultPage from './404/container.jsx'

const App = () =>
  <AppRoot>
    <Header />
    <Switch>
      <Route key={'root'} exact path={'/'} component={Home} />
      <Route key={'about'} exact path={'/about'} component={About} />
      <Route key={'blog'} exact path={'/blog'} component={Blog} />
      <Route key={'404'} component={DefaultPage} />
    </Switch>
  </AppRoot>

const AppRoot = styled.div`
  display: grid
  grid-template-columns: [left-margin] 10vw [center-content-col] auto [right-margin] 10vw
  grid-template-rows: [header] auto [center-content-row] auto
`

export default App
