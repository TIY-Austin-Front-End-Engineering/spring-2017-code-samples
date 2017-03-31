export default function todoView (store, todo) {
  let $html = $(`<li>${todo.name} - <button>ⓧ</button></li>`);

  $($html).on('click', 'button', function () {
    store.dispatch({ type: "DELETE_TODO", todo: todo });
  });

  return $html;
}
