import messageView from './message_view.js'
import EVENTS from './events.js'

export default function chatView (store) {
  // Here we are using the store to get the current state
  //  to use in our view function.
  let currentUser = store.getState().session.username;
  let html = $(`
    <section>
      <h2>Hey ${currentUser}! Lets, Chat!</h2>
      <section class='messages'>
      </section>
      <section class='form'>
        <input type='text'></input><button>Send</button>
      </section>
    </section>
  `);

  $.getJSON("http://tiny-za-server.herokuapp.com/collections/pub-sub-chat").then((data) => {
    let container = $(html).find('.messages');
    let messages  = data.reverse().map(function (message) {
      return messageView(store, message);
    }).join("");
    container.html(messages);
  });

  $(html).find('button').on('click', (e) => {
      store.fire(EVENTS.SEND_MESSAGE, { msg: $(html).find('input').val() });
  });

  return html;
};
