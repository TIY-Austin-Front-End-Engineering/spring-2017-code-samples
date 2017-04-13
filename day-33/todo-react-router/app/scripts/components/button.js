import React from 'react'

class Button extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (<input
      type="button"
      className={"btn " + this.props.className}
      onClick={this.props.onClick} value={this.props.text} />)
  }
}

export default Button
