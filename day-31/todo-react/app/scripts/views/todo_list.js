import todoView from './todo.js';
import createTodo from '../actions/create_todo.js'

export default function todoListView (store) {
  let state     = store.getState();
  let title     = `${state.currentUser}'s Important ToDo List`;
  let todoInput = `<input type='text' placeholder='feed the 🐈'>`
  let $html     = ''

  if (state.loadingTodos) {
    $html = $(`
      <section >
        <div class='loader'> <div></div> <div></div> <div></div> <div></div> <div></div> </div>
        <h4>Loading Todos</h4>
        <ul> </ul>
      </section>
    `);
  } else {
    $html = $(`
      <section >
        <h4>${title}</h4>
        <ul> </ul>
        ${todoInput}
      </section>
    `);
  }
  // Render an entire list of TODOs by calling my `todoView` function.
  let todos = state.todos.map((todo) => todoView(store, todo));

  $($html).find('ul').html(todos)

  $($html).find('input').on('keyup', (e) => {
    if (e.keyCode === 13) {
      store.dispatch(createTodo($('input').val()));
    }
  });

  return $html;
};
