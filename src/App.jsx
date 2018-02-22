import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Header from './header/header.container.jsx'
import Home from './home/home.component.jsx'
import About from './about/about.component.jsx'

const App = () =>
<div>
  <Header />
  <Switch>
    <Route key={'root'} path={'/'} component={Home} exact={true} />
    <Route key={'about'} path={'/about'} component={About} exact={true} />
    <Route key={'market'} path={'/market'} component={null} exact={true} />

    {/* <Route component={NoMatch}/> some 404 page */}
  </Switch>  
</div>


export default App
