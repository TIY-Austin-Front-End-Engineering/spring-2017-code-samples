import store from './store.js'

export default function app() {

  // To stop us from having to set the headers in _every_ request.
  // We could use a feature like jQuery's ajaxSend to setup a before handler.
  $.ajaxSend(function (event, xhr, settings) {
      xhr.setRequestHeader("application-id", "B8B5DF55-71A3-E2A2-FF3C-E6060E190B00");
      xhr.setRequestHeader("secret-key", "0248A80D-3DB7-85BB-FF62-B99778C11A00");
  });

  // However, we could instead define our own _default_ settings and update it
  // by using Object.assign when we want to override it on a specific request
  let defaultAJAXSettings = {
    url: "https://api.backendless.com/v1/data/Tasks",
    type: "GET",
    headers: {
      "application-id": "B8B5DF55-71A3-E2A2-FF3C-E6060E190B00",
      "secret-key": "0248A80D-3DB7-85BB-FF62-B99778C11A00"
    },
    data: {}
  }

  // Now we can use the default settings for most requests and update them for new ones
  $.ajax(defaultAjaxSettings).then((tasks) => {
    console.log(tasks);
  })

  //Or we can override them with Object.assign

  var postSettings = Object.assign({}, defaultAjaxSettings, {
    type: "POST",
    data: {
      
    }
  });

  const render = () => {
    let state  = store.getState();
    $('#app').html(state.view(store));
  }

  store.subscribe(render);
  store.dispatch({ type: "START" });
}
