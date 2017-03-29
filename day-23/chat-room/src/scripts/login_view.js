import events from './events.js'

export default function loginView (store) {
  //In a view function we create some html,
  //  assign any jQuery event handlers we need,
  //  and finally return the html.
  
  let html = $(`
    <section>
      <h2>Login</h2>
      <input type='text' value='Joelle'/>
      <button>Login</button>
    </section>
  `);

  $(html).find('button').on('click', (e) => {
    let username = $(html).find('input').val();
    // Here we are 'firing' an event which will run our 'update' function, that
    // the store is holding on to for us.
    store.fire(events.USER_LOGIN, { name: username });
  });

  //Always remember to return our html in our view functions
  return html;
};
