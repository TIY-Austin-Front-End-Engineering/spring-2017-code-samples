const todos = {
  todosLoaded: (newTodos) => {
    return {
      type: "TODOS_LOADED",
      todos: newTodos
    }
  },
};

export default todos
