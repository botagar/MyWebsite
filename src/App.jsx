import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Header from './header/container.jsx'
import Home from './home/container.jsx'
import Blog from './blog/container.jsx'
import About from './about/container.jsx'
import DefaultPage from './404/container.jsx'

const App = () =>
<div className='root-layout'>
  <Header />
  <Switch>
    <Route key={'root'} path={'/'} component={Home} exact />
    <Route key={'about'} path={'/about'} component={About} exact={true} />
    <Route key={'blog'} path={'/blog'} component={Blog} exact={true} />
    <Route key={'404'} component={DefaultPage} />
  </Switch>
</div>

export default App
