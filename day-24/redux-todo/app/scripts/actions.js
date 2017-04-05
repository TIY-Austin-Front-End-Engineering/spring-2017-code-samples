const actions = {
  loginUser: (username) => {
    return {
      type: "LOGIN_USER",
      user: username
    }
  },

  loadTodos: () => {
    return {
      type: "LOAD_TODOS"
    }
  },

  todosLoaded: (newTodos) => {
    return {
      type: "TODOS_LOADED",
      todos: newTodos
    }
  },

  createTodo: (newTodo) => {
    return {
      type: "CREATE_TODO",
      todo: newTodo
    }
  },

  deleteTodo: (todo) => {
    return {
      type: "DELETE_TODO",
      todo: todo
    }
  }
};

export default actions
