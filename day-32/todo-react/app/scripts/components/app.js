import React from 'react';
import { connect } from 'react-redux'
import container from '../containers/all.js'

class AppRoot extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    let CurrentView = this.props.view;
    return (
      <main>
        <h1>{this.props.title}</h1>
        <CurrentView />
      </main>
    );
  }
}

export default connect(container.allState)(AppRoot)
