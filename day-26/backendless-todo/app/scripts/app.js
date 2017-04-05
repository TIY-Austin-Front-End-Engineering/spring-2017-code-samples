import { createStore, applyMiddleware } from 'redux'

import Backendless from 'backendless'

import loginView from './login_view.js'
import todoListView from './todo_list_view.js'
import todoView from './todo_view.js'
import logger from './logger/logger_middleware.js'
import api from './api.js'
import utils from './utils.js'
import Todo from './todo.js'


export default function app() {

  const initialState = {
    currentUser: null,
    loadingTodos: false,
    todos: [],
    view: loginView
  }

  const reducer = function (currentState, action) {
    if (currentState === undefined) {
      return initialState;
    }

    switch(action.type) {
      case "LOGIN_USER":
        setTimeout(() => {
          api.getAllTodos(store);
          // This 'setTimeout' is only here so I can see my loading animation.
        }, 2000);

        return utils.copyState(currentState, {
          loadingTodos: true,
          currentUser: action.user,
          view: todoListView
        });

      case "LOAD_TODOS":
        api.getAllTodos(store);
        return currentState;

      case "TODOS_LOADED":
        var todos = action.todos.map(function (todoJSON) {
          return new Todo(todoJSON);
        });

        return utils.copyState(currentState, {
           todos: todos,
           loadingTodos: false
        });

      case "CREATE_TODO":
        api.createNewTodo(store, action.todo);
        return currentState;

      case "DELETE_TODO":
        api.deleteTodo(store, action.todo);
        return currentState;

      case "START":
        // Do nothing, we just started.
        return currentState;

      default:
        console.debug("Unhandled action!", action.type);
        return currentState;
    }
  }
  const store = createStore(reducer, applyMiddleware( logger ));

  const render =  function () {
    let state = store.getState();
    $('#app').html(state.view(store));
  }

  //The store will now run our 'render' function after every event is dispatched.
  store.subscribe(render);
  store.dispatch({ type: "START" });
}
