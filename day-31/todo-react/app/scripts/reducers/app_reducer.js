import utils from '../utils.js'
import loginView from '../views/login.js'
import todoListView from '../views/todo_list.js'
import Todo from '../models/todo.js'

const initialState = {
  currentUser: null,
  loadingTodos: false,
  todos: [],
  view: loginView
}

export default function reducer (currentState, action) {
  const newState = utils.newState(currentState);

  if (currentState === undefined) {
    return initialState;
  }

  switch(action.type) {
    case "LOGIN_USER":
      return utils.copyState(currentState, {
        loadingTodos: true,
        currentUser: action.user,
        view: todoListView
      });

    case "TODOS_LOADED":
      var todos = action.todos.map((todoJSON) => new Todo(todoJSON));

      return newState({
         todos: todos,
         loadingTodos: false
      });

    //Has "side effects"
    case "UPDATING_TODO":
      return newState({ loadingTodos: true });

    case "UPDATED_TODO":
      return newState({ loadingTodos: false });

    // "NoOp"
    case "START": // Do nothing, we just started.
      return currentState;

    default:
      console.debug("Unhandled action!", action.type);
      return currentState;
  }
}
