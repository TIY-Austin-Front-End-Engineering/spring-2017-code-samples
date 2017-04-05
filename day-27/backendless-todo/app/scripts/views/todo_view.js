import actions from '../actions/todos.js'

export default function todoView (store, todo) {
  let $html = $(`<li>${todo.name} - <button>ⓧ</button></li>`);

  $($html).on('click', 'button', function () {
    store.dispatch(actions.deleteTodo(todo));
  });

  return $html;
}
