export default {
  allState: function (state) {
    return state
  },

  userInfo: function (state) {
    return {
      currentUser: state.currentUser
    }
  }
}
