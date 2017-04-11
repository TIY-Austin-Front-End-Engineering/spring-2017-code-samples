import api from '../api.js'
import loadTodos from './load_todos.js'

export default function completeTodo (todo) {
  return function (dispatch) {
    dispatch({type: "UPDATING_TODOS" })
    return $.ajax({
      url: api.url + "/" + todo.id,
      type: "PUT",
      dataType: "JSON",
      data: {
        complete: true
      }
    }).then(() => dispatch(loadTodos()));
  };
};
