import deleteTodo from '../actions/delete_todo.js'
export default function todoView (store, todo) {
  let $html = $(`<li>${todo.name} - <button>ⓧ</button></li>`);

  $($html).on('click', 'button', () => store.dispatch(deleteTodo(todo)));

  return $html;
}
