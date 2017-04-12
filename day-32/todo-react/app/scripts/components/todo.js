import React from 'react'
import { connect } from 'react-redux'
import containers from '../containers/all.js'
import deleteTodo from '../actions/delete_todo.js'
import updateTodo from '../actions/update_todo.js'
import completeTodo from '../actions/complete_todo.js'
import TodoToolbar from './todo_toolbar.js'

class Todo extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      deleting: false
    };
    this.handleChecked = this.handleChecked.bind(this);
    this.handleDeleted = this.handleDeleted.bind(this);
  }

  handleChecked () {
    this.props.dispatch(completeTodo(this.props.todo));
  }

  handleDeleted () {
    this.setState({ deleting: true });
    this.props.dispatch(deleteTodo(this.props.todo))
  }

  todoClass () {
    var classes = ["list-item"]
    if (this.props.todo.complete === "true") {
      classes.push("completed");
    }

    if (this.state.deleting === true) {
      classes.push("delete");
    }

    return classes.join(" ");
  }

  render () {
    return (
      <li className={this.todoClass()}>
        <span>{this.props.todo.name}-</span>
        <TodoToolbar
          completed={this.props.todo.complete === "true"}
          onChecked={this.handleChecked}
          onDeleted={this.handleDeleted} />
      </li>);
  }
}

export default connect()(Todo)
