import 'babel-polyfill'
import fs from 'mz/fs'
import path from 'path'
import Express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import cheerio from 'cheerio'

import configureStore from '../client/redux/configureStore'
import emptyState from '../client/redux/initialState'
import App from '../client/App.jsx'

const app = Express()
const port = 3000

// Serve static files
app.use('/dist', Express.static('dist'))

// This is fired every time the server side receives a request
app.use('/', handleRender)

// We are going to fill these out in the sections to follow
async function handleRender (req, res) {
  const store = configureStore(emptyState)
  let context = {}
  console.info('Store Initialised')

  const appHtml = renderToString(
    <Provider store={store}>
      <StaticRouter context={context} location={req.url} >
        <App />
      </StaticRouter>
    </Provider>
  )

  const preloadedState = store.getState()

  res.set('cache-control', 'no-cache')
  res.send(await renderFullPage(appHtml, preloadedState))
}

async function renderFullPage (reactAppHtml, preloadedState) {
  let initialHtml = await fs.readFile(path.join(__dirname, '/index.html'), 'utf8')
  const $ = cheerio.load(initialHtml)

  let preloadedStateHtml = `
        <script>
            window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
    `
  $('#app').append(reactAppHtml)
  $('#app').after(preloadedStateHtml)
  return $.html()
}

console.info('Server now running on port ', port)
app.listen(port)
