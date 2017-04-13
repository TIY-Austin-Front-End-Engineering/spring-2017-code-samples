import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store.js'
import AppView from './components/app.js'
import { newState } from './utils.js'

export default function app() {
  console.log(newState);
  render(
    <Provider store={store}>
      <AppView />
    </Provider>,
    document.getElementById('app')
  )
}
