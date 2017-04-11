export default function (store) {
  let $html = $(`
    <section>
      <input type='text' value='Justin' />
      <button>Login</button>
    </section>
    `);

  $($html).find('button').on('click', function (e) {
    store.dispatch({
      type: "LOGIN_USER",
      user: $('input').val()
    });
  });

  return $html;
}
