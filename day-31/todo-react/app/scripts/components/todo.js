import React from 'react'
import { connect } from 'react-redux'
import containers from '../containers/all.js'
import deleteTodo from '../actions/delete_todo.js'
import updateTodo from '../actions/update_todo.js'
import completeTodo from '../actions/complete_todo.js'

const Todo = React.createClass({
  getInitialState: function () {
    return {
      deleting: false
    };
  },

  handleChecked: function() {
    this.props.dispatch(completeTodo(this.props.todo));
  },

  handleDeleted: function () {
    this.setState({ deleting: true });
    this.props.dispatch(deleteTodo(this.props.todo))
  },

  todoClass: function () {
    var classes = ["list-item"]
    if (this.props.todo.complete === "true") {
      classes.push("completed");
    }

    if (this.state.deleting === true) {
      classes.push("delete");
    }

    return classes.join(" ");
  },

  renderActions: function () {
    if (this.props.todo.complete === "true") {
      return (<button onClick={this.handleDeleted}>🙅</button>);
    } else {
      return (<button onClick={this.handleChecked}>✅</button>);
    }
  },

  render: function () {
    return (
      <li className={this.todoClass()}>
        <span>{this.props.todo.name} -</span>
        <span>
          {this.renderActions()}
        </span>
      </li>);
  }
});

export default connect()(Todo)
