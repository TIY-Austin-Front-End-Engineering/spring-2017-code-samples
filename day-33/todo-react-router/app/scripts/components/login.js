import React from 'react'
import { connect } from 'react-redux'
import containers from '../containers/all.js'
import loginUser from '../actions/login_user.js'
import Button from './button.js'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    let username = this.refs.username.value;
    this.props.dispatch(
      loginUser(
        username,
        this.props.history.push
      )
    );
  }

  render () {
    return (
      <section>
        <input ref='username' type='text' defaultValue='Justin' />
        <Button onClick={this.handleClick} text="Login" />
      </section>
    );
  }
}

export default connect()(Login)
