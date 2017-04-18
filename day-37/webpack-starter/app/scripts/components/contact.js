import React from 'react'
import { Link } from 'react-router-dom'

class Contact extends React.Component {

  constructor (props) {
    super(props);
    this.state = {}

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    this.setState({
      name: e.target.value
    })
  }

  render () {
    return (
      <section>
        <h2>Please contact Us</h2>
        <form>
          <input type='text' onChange={this.handleChange} defaultValue='name'/>
          <input type='email' defaultValue='email'/>
          <input type='submit' value='Send'/>
        </form>
        <Link to="/about">Learn About Us</Link>
      </section>
    );
  }
}

export default Contact
