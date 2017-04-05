import actions from './actions.js'

const url = 'http://tiny-za-server.herokuapp.com/collections/flux-todo';
const api = {
  getAllTodos: function (store) {
    $.getJSON(url).then((data) => {
      store.dispatch(actions.todosLoaded(data));
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
    }).then(() => {
      store.dispatch(actions.loadTodos())
    });
  },

  deleteTodo: function (store, todo) {
    $.ajax({
      url: `${url}/${todo.id}`,
      type: "DELETE",
    }).then(() => {
      store.dispatch(actions.loadTodos())
    });
  }
};

export default api
