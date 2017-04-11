import React from 'react'
import { connect } from 'react-redux'
import containers from '../containers/all.js'
import deleteTodo from '../actions/delete_todo.js'
import updateTodo from '../actions/update_todo.js'
import completeTodo from '../actions/complete_todo.js'

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

  renderActions () {
    if (this.props.todo.complete === "true") {
      return (<button onClick={this.handleDeleted}>🙅</button>);
    } else {
      return (<button onClick={this.handleChecked}>✅</button>);
    }
  }

  render () {
    return (
      <li className={this.todoClass()}>
        <span>{this.props.todo.name} -</span>
        <span>
          {this.renderActions()}
        </span>
      </li>);
  }
}

export default connect()(Todo)
