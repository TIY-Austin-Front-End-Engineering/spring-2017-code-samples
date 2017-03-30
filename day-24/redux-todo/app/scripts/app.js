import { createStore } from 'redux'
import loginView from './login_view.js'
import todoListView from './todo_list_view.js'
import todoView from './todo_view.js'

export default function app() {

  const initialState = {
    currentUser: null,
    todos: [{ name: "Finish Grading Homework" }],
    view: loginView
  }

  const reducer = function (currentState, action) {
    if (currentState === undefined) {
      return initialState;
    }

    switch(action.type) {
      case "LOGIN_USER":
        console.log("User Login Action Dispatched");

        var newState = {
          currentUser: action.user,
          view: todoListView
        };

        return Object.assign({}, currentState, newState);

      case "DEBUG":
        console.log(currentState, action);
        return currentState;

      default:
        console.debug("Unhandled action!", action.type);
        return currentState;
    }
  }

  const store = createStore(reducer);

  const render =  function () {
    let state = store.getState();
    $('#app').html(state.view(store));

    console.log("Rendered with state:")
    console.debug(state);
  }

  //The store will now run our 'render' function after every event is dispatched.
  store.subscribe(render);
  store.dispatch({ type: "DEBUG" });
}
