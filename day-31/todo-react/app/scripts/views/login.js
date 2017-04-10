import loginUser from '../actions/login_user.js'
export default function (store) {
  let $html = $(`
    <section>
      <input type='text' value='Justin' />
      <button>Login</button>
    </section>
    `);

  $($html).find('button').on('click', function (e) {
    let username = $('input').val();
    let action   = loginUser(username);
    store.dispatch(action);
  });

  return $html;
}
