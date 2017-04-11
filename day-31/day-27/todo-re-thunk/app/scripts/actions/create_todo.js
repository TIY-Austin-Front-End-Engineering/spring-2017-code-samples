import api from '../api.js'
import loadTodos from './load_todos.js'

export default function createTodo (todo) {
  return (dispatch) => {
    dispatch({ type: "Sending Todo" });
    return $.ajax({
      url: api.url,
      type: "POST",
      dataType: "JSON",
      data: {
        name: todo,
        complete: false
      }
    }).then(() => dispatch(loadTodos()));
  }
}
