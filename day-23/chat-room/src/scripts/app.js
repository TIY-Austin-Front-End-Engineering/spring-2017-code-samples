import Store from './store.js'
import Message from './message.js'
import Session from './session.js'
import loginView from './login_view.js'
import chatView from './chat_view.js'
import EVENTS from './events.js'
import welcome from './welcome.js'

export default function app() {

  welcome();

  //The starting state of our app
  let initialState = {
    session: null,
    view: loginView
  };

  const appStore  = new Store(initialState);

  const chatUpdate = function (state, event, data) {
    if (state === undefined) {
      return initialState;
    }

    if (event === undefined) {
      console.debug("Undefined Event sent to update!");
      return state;
    }

    // Before we look for the event we need to be sure
    // that our event and state are not undefined.

    switch (event) {

      case EVENTS.USER_LOGIN:
          // In every case we need to make sure return either
          // new state or the existing state argument.
          return {
            session: new Session(data.name),
            view: chatView
          }

      case EVENTS.SEND_MESSAGE:
          let config = {
              url: "http://tiny-za-server.herokuapp.com/collections/pub-sub-chat",
              method: "POST",
              dataType: "JSON",
              data: {
                body: data.msg,
                username: state.session.username,
                time: new Date()
              }
          };

          $.ajax(config).then((data) => {
            console.log(data);
          });

          // We aren't updating the state here, so we return the
          // same state
          return state;

      default:
          console.debug(`Unhandled Event: '${event}'`, data);
          return state;
    }
  }

  const render = (state, event, data) => {
    //Our render function grabs the view from the state and puts it on the page
    $('#app').html(state.view(appStore));
  }

  //Everytime an event is 'fired' the store will run these two functions.
  appStore.add(chatUpdate);
  appStore.add(render);
  render();
}
