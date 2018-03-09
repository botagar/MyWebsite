import React from 'react'
import { hydrate } from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter } from 'react-router-dom'

import ErrorBoundary from './shared/errorBoundary'
import App from './App.jsx'

import initialState from './redux/initialState'
import configureStore from './redux/configureStore'
import detectBrowserCapabilities from './shared/detectBrowser'

import './index.html'
import './shared/styles/reset.css'
import './shared/styles/default.css'

const preloadedState = window.__PRELOADED_STATE__
delete window.__PRELOADED_STATE__

const render = () => {
  const reactDevTools = window.devToolsExtension ? window.devToolsExtension() : f => f
  const appContainer = document.getElementById('app')
  const store = configureStore(preloadedState || initialState, reactDevTools)

  let browserState = detectBrowserCapabilities()
  console.debug(browserState)
  // store.dispatch(someActionToDoWithSettingAGlobalStyleConfig)

  hydrate(
    <AppContainer>
      <ErrorBoundary>
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      </ErrorBoundary>
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
