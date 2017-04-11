import deleteTodo from '../actions/delete_todo.js'
import updateTodo from '../actions/update_todo.js'

export default function todoView (store, todo) {
  let $html = $(`<li><span class='edit'>${todo.name}</span> - <button>ⓧ</button></li>`);

  $($html).on('click', 'button', () => {
    store.dispatch(deleteTodo(todo))
  });

  $($html).on('click', '.edit', () =>  {
      store.dispatch(updateTodo(todo));
  });

  return $html;
}
