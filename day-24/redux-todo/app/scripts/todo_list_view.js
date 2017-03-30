import todoView from './todo_view.js';

export default function todoListView (store) {
  let state = store.getState();

  let $html = $(`
    <section>
      <h4>All my Todos</h4>
      <ul>
        ${state.todos.map(todoView)}
      </ul>
    </section>
  `);

  return $html;
};
