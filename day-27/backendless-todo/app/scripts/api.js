import actions from './actions/todos.js'
import store from './store.js'

const url = 'http://tiny-za-server.herokuapp.com/collections/flux-todo';
const api = {
  getAllTodos: function () {
    $.getJSON(url).then((data) => {
      store.dispatch(actions.todosLoaded(data));
    });
  },

  createNewTodo: function (todo) {
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

  deleteTodo: function (todo) {
    $.ajax({
      url: `${url}/${todo.id}`,
      type: "DELETE",
    }).then(() => {
      store.dispatch(actions.loadTodos())
    });
  }
};

export default api
