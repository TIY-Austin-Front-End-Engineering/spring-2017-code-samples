import React from "react";
import { connect } from "react-redux";
import Quote from "./quote.js";

class Flipped extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <h1>You flipped</h1>
        {this.props.quotes
          .filter(q => q.flipped)
          .map(q => <Quote author={q.author} flipped={false} quote={q.quote} />)}
      </section>
    );
  }
}

export default connect(state => state)(Flipped);
