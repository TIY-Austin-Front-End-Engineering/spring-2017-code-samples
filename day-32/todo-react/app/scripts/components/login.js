import React from 'react'
import { connect } from 'react-redux'
import containers from '../containers/all.js'
import loginUser from '../actions/login_user.js'

class Login extends React.Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    let username = this.refs.username.value;
    this.props.dispatch(loginUser(username))
  }

  render () {
    return (
      <section>
        <input ref='username' type='text' defaultValue='Justin' />
        <button onClick={this.handleClick}>Login</button>
      </section>
    );
  }
}

export default connect(containers.allState)(Login)
