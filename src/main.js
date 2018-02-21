import React from 'react'
import ReactDOM, { hydrate } from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter } from 'react-router-dom'

import App from './App.jsx'

import initialState from './common/initialState'
import configureStore from './redux/configureStore'

import './index.html'
import './reset.css'

const preloadedState = window.__PRELOADED_STATE__
delete window.__PRELOADED_STATE__

const render = () => {
  const reactDevTools = window.devToolsExtension ? window.devToolsExtension() : f => f
  const appContainer = document.getElementById('app')
  const store = configureStore(preloadedState || initialState, reactDevTools)

  hydrate(
    <AppContainer>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </AppContainer>,
    appContainer
  )
}

if (module.hot) {
  module.hot.accept('./home/home.component.jsx', () => {
    render()
  })
}

render()
