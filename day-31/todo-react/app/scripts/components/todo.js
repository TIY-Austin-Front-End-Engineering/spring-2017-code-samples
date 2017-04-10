import React from 'react'
import { connect } from 'react-redux'
import containers from '../containers/all.js'
import deleteTodo from '../actions/delete_todo.js'
import updateTodo from '../actions/update_todo.js'

const Todo = React.createClass({
  handleClick: function (e) {
    this.props.dispatch(deleteTodo(this.props.todo))
  },

  render: function () {
    return ( <li>{this.props.todo.name} - <button onClick={this.handleClick}>ⓧ</button></li> );
  }
});

export default connect()(Todo)
