import api from '../api.js'

export default function updateTodo (todo) {
    return (dispatch) => {
        dispatch({ type: "UPDATING_TODO" })
        $.ajax({
          url: `${api.url}/${todo.id}`,
          type: "PUT",
          data: {
            name: todo.name,
            description: todo.description
          }
        }).then((response) => {
          dispatch({ type: "UPDATED_TODO" })
        });
    }
}
