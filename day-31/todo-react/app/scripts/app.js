import store from './store.js'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import AppView from './views/app.js'

export default function app() {
  render(
    <Provider store={store}>
      <AppView />
    </Provider>,
    document.getElementById('app')
  )
}
