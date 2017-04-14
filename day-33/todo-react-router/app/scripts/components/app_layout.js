import React from 'react';
import { connect } from 'react-redux'
import container from '../containers/all.js'

class AppLayout extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <main>
        <h1>TodoList</h1>
        <h5>{this.props.title}</h5>
        {this.props.children}
      </main>
    );
  }
}

export default connect(container.allState)(AppLayout)
