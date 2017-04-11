import api from '../api.js'
import utils from '../utils.js'
import loginView from '../views/login_view.js'
import todoListView from '../views/todo_list_view.js'
import Todo from '../models/todo.js'

const initialState = {
  currentUser: null,
  loadingTodos: false,
  todos: [],
  view: loginView
}

export default function reducer (currentState, action) {
  if (currentState === undefined) {
    return initialState;
  }

  switch(action.type) {
    case "LOGIN_USER":
      setTimeout(() => {
        api.getAllTodos();
        // This 'setTimeout' is only here so I can see my loading animation.
      }, 2000);

      return utils.copyState(currentState, {
        loadingTodos: true,
        currentUser: action.user,
        view: todoListView
      });

    case "LOAD_TODOS":
      api.getAllTodos();
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
      api.createNewTodo(action.todo);
      return currentState;

    case "DELETE_TODO":
      api.deleteTodo(action.todo);
      return currentState;

    case "START":
      // Do nothing, we just started.
      return currentState;

    default:
      console.debug("Unhandled action!", action.type);
      return currentState;
  }
}
