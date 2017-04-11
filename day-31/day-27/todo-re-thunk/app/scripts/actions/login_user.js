import loadTodos from './load_todos.js'
export default function loginUser (user) {
  return (dispatch) => {
    dispatch({ type: "LOGIN_USER", user: user });
    dispatch(loadTodos());
  }
}
