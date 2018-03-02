import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Header from './header/header.container.jsx'
import Home from './home/home.component.jsx'
import Blog from './blog/page.container.jsx'
import About from './about/about.component.jsx'
import DefaultPage from './404/page.container.jsx'

const App = () =>
<div className='root-layout'>
  <Header />
  <Switch>
    <Route key={'root'} path={'/'} component={Home} exact={true} />
    <Route key={'about'} path={'/about'} component={About} exact={true} />
    <Route key={'blog'} path={'/blog'} component={Blog} exact={true} />
    <Route key={'404'} component={DefaultPage}/>
  </Switch>
</div>

export default App
