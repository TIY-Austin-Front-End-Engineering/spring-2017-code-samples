import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import store from './store.js'
import Login from './components/login.js'
import TodoList from './components/todo_list.js'
import Todo from './components/todo.js'
import AppLayout from './components/app_layout.js'

/*
 * Sometimes in our application we don't want people to be able to navigate to a
 * given route. Using a custom function like this will allow us to control
 * Who goes to what routes.
 */
const ConditionalRoute = (opts) => {
  if (opts.if()) {
    return (<span>{opts.children}</span>)
  } else {
    return <Redirect to="/" />
  }
}

export default function app() {
  render(
    <Provider store={store}>
      <Router>
        <div>
          <Route path="/" component={AppLayout} />
          <Route exact path="/"      component={Login} />
          <Route exact path="/login" component={Login} />
          <ConditionalRoute if={() => (store.getState().currentUser !== null)} >
            {/* These routes will only be rendered if the above if function returns true */}
            <Route exact path="/todos" component={TodoList} />
            <Route path="/todos/:id" component={Todo} />
          </ConditionalRoute>
        </div>
      </Router>
    </Provider>,
    document.getElementById('app')
  )
}
