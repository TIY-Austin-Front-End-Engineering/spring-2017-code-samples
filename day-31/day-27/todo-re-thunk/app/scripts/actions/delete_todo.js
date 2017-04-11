import loadTodos from './load_todos.js'
import api from '../api.js'

export default function deleteTodo (todo) {
  return (dispatch) => {
    return $.ajax({
      url: `${api.url}/${todo.id}`,
      type: "DELETE",
    }).then(() => {
      dispatch(loadTodos());
    });
  }
}
