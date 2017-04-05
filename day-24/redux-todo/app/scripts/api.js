import { todosLoaded, loadTodos } from './actions.js'

const api = {
  getAllTodos: function (store) {
    $.getJSON(url).then((data) => {
      store.dispatch(todosLoaded(data));
    });
  },

  createNewTodo: function (store, todo) {
    $.ajax({
      url: url,
      type: "POST",
      dataType: "JSON",
      data: {
        name: todo,
        complete: false
      }
    }).then(() => { store.dispatch(loadTodos())
    });
  },

  deleteTodo: function (store, todo) {
    $.ajax({
      url: `${url}/${todo._id}`,
      type: "DELETE",
    }).then(() => { store.dispatch(loadTodos())
    });
  }
};

export default api
