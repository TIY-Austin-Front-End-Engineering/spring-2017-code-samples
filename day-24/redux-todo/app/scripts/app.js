import { createStore, applyMiddleware } from 'redux'
import loginView from './login_view.js'
import todoListView from './todo_list_view.js'
import todoView from './todo_view.js'
import logger from './logger_middleware.js'

export default function app() {
  const url = 'http://tiny-za-server.herokuapp.com/collections/flux-todo';

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
        var newState = {
          loadingTodos: true,
          currentUser: action.user,
          view: todoListView
        };

        $.getJSON(url).then((data) => {
          setTimeout(() => {
            store.dispatch({ type: "TODOS_LOADED", todos: data });
          }, 2000);
          // This 'setTimeout' is only here so I can see my loading animation.
        });

        return Object.assign({}, currentState, newState);

      case "LOAD_TODOS":
        $.getJSON(url).then((data) => {
          store.dispatch({ type: "TODOS_LOADED", todos: data });
        });
        return currentState;

      case "TODOS_LOADED":
        var newState = {
           todos: action.todos,
           loadingTodos: false
        };
        return Object.assign({}, currentState, newState);

      case "CREATE_TODO":
        $.ajax({
          url: url,
          type: "POST",
          dataType: "JSON",
          data: {
            name: action.todo,
            complete: false
          }
        }).then(function () {
          store.dispatch({ type: "LOAD_TODOS" })
        });
        return currentState;

      case "DELETE_TODO":
        var todo = action.todo;
        $.ajax({
          url: `${url}/${todo._id}`,
          type: "DELETE",
        }).then((data) => {
          store.dispatch({ type: "LOAD_TODOS" }) });
        return currentState;

      case "NOOP":
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
  store.dispatch({ type: "NOOP" });
}
