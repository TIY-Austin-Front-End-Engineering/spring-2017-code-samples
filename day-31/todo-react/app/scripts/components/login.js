import React from 'react'
import { connect } from 'react-redux'
import containers from '../containers/all.js'
import loginUser from '../actions/login_user.js'

const Login = React.createClass({

  handleClick: function () {
    let username = this.refs.username.value;
    this.props.dispatch(loginUser(username))
  },

  render: function () {
    return (
      <section>
        <input ref='username' type='text' defaultValue='Justin' />
        <button onClick={this.handleClick}>Login</button>
      </section>
    );
  }
});

export default connect(containers.allState)(Login)
