import store from './store.js'

export default function app() {
  $.ajaxSend(function (event, xhr, settings) {
      xhr.setRequestHeader("application-id", "B8B5DF55-71A3-E2A2-FF3C-E6060E190B00");
      xhr.setRequestHeader("secret-key", "0248A80D-3DB7-85BB-FF62-B99778C11A00");
  });

  let settings = {
    url: "foo",
    headers: {
      "application-id", "foo"
    },
    data: {}
  }

  var updatedSettings = Object.assign({}, settings, {
    data: {
      foo: "bar"
    }
  });


  const render = () => {
    let state  = store.getState();
    $('#app').html(state.view(store));
  }

  store.subscribe(render);
  store.dispatch({ type: "START" });
}
