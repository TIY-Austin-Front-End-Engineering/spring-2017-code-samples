import store from './store.js'

export default function app() {
  const render =  function () {
    let state = store.getState();
    $('#app').html(state.view(store));
  }
  store.subscribe(render);
  store.dispatch({ type: "START" });
}
