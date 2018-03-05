import React from 'react'
import ReactDOM, { hydrate } from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter } from 'react-router-dom'
import { detect } from 'detect-browser'
import compareVersions from 'compare-versions'

import App from './App.jsx'

import initialState from './common/initialState'
import configureStore from './redux/configureStore'

import './index.html'
import './reset.css'
import './common/styles/common.css'

const preloadedState = window.__PRELOADED_STATE__
delete window.__PRELOADED_STATE__

const render = () => {
  const reactDevTools = window.devToolsExtension ? window.devToolsExtension() : f => f
  const appContainer = document.getElementById('app')
  const store = configureStore(preloadedState || initialState, reactDevTools)

  // TODO: Move browser detection to somewhere better.
  const browser = detect();
  switch (browser && browser.name) {
    case 'chrome':
      compareVersions(browser.version, '62') >= 0 ? console.log('Style: Grid') : console.log('Style: Old')
      break
    case 'firefox':
      compareVersions(browser.version, '57') >= 0 ? console.log('Style: Grid') : console.log('Style: Old')
      break
    case 'edge':
      compareVersions(browser.version, '16') >= 0 ? console.log('Style: Grid') : console.log('Style: Old')
      break
    case 'ie':
      compareVersions(browser.version, '11') >= 0 ? console.log('Style: Grid-Old') : console.log('Style: Old')
      break
    case 'safari':
      compareVersions(browser.version, '10.3') >= 0 ? console.log('Style: Grid') : console.log('Style: Old')
      break
    default:
      console.log('not supported');
  }

  // store.dispatch(someActionToDoWithSettingAGlobalStyleConfig)

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
