import React from 'react'
import { connect } from 'react-redux'
import Todo from './todo.js';
import containers from '../containers/all.js'
import createTodo from '../actions/create_todo.js'

class TodoList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loadingTodos: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (e) {
    if (e.keyCode === 13) {
      this.props.dispatch(createTodo(e.target.value))
    }
  }

  render () {
    if (this.state.loadingTodos) {
      return (
       <section>
        <div className='loader'> <div></div> <div></div> <div></div> <div></div> <div></div> </div>
        <h4>Loading Todos</h4>
        <ul> </ul>
      </section>);
    } else {
      return (
        <section >
          <h4>{`${this.props.currentUser}'s Important ToDo List`}</h4>
          <ul>
            {this.props.todos.map((todo, idx) => {
              return (<Todo key={idx} todo={todo} />);
            })}
          </ul>
          <input type='text' onKeyUp={this.handleChange} placeholder='feed the 😻' />
        </section>
      );
    }
  }
}

export default connect(containers.userAndTodos)(TodoList)
