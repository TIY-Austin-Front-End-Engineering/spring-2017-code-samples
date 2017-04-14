export default {
  allState: function (state) {
    return state
  },

  userAndTodos: function (state) {
    return {
      currentUser: state.currentUser,
      loadingTodos: state.loadingTodos,
      todos: state.todos
    }
  },

  userInfo: function (state) {
    return {
      currentUser: state.currentUser
    }
  }
}
