import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import containers from '../containers/all.js'

const Todo = ({ match, todos }) => {
  let todo = todos.filter((t) => t.id == match.params.id)[0];
  return (
    <section>
      <Link to="/todos">Back</Link>

      <div>
        <h4>{todo.name}</h4>
        <p><strong>Complete:</strong>{todo.complete}</p>
      </div>
    </section>
  )
}
export default connect(containers.allState)(Todo)
