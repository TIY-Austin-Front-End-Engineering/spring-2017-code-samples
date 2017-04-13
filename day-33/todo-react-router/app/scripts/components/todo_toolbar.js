import React from 'react'
import Button from './button.js'

class TodoToolbar extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    if (this.props.completed === true) {
      return (<Button onClick={this.props.onDeleted} text="🙅"/>);
    } else {
      return (<Button onClick={this.props.onChecked} text="✅" />);
    }
  }
}

export default TodoToolbar
