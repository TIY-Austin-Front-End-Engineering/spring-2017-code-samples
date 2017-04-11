import api from '../api.js'
import actions from './todos.js'

export default function loadTodos () {
  return (dispatch) => {
    return $.getJSON(api.url).then((data) => {
      dispatch(actions.todosLoaded(data));
    });
  }
}
