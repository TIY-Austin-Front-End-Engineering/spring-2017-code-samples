import todoView from './todo_view.js';

export default function todoListView (store) {
  let state     = store.getState();
  let title     = `${state.currentUser}'s Important ToDo List`;
  let className = "loader hidden";
  let todoInput = `<input type='text' placeholder='feed the 🐈'>`

  if (state.loadingTodos) {
    className = "loader"
    title     = "Loading todos"
    todoInput = ""
  }

  let $html = $(`
    <section >
      <div class='${className}'> <div></div> <div></div> <div></div> <div></div> <div></div> </div>
      <h4>${title}</h4>
      <ul>
      </ul>
      ${todoInput}
    </section>
  `);

  // Render an entire list of TODOs by calling my `todoView` function.
  var todos = state.todos.map(function (todo) {
    return todoView(store, todo);
  });
  $($html).find('ul').html(todos)

  $($html).find('input').on('keyup', function (e) {
    if (e.keyCode === 13 && e.key == "Enter") {
      let todoText = $('input').val();
      store.dispatch({ type: "CREATE_TODO", todo: todoText });
    }
  });

  return $html;
};
