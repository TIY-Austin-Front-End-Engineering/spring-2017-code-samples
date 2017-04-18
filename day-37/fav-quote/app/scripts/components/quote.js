import React from "react";
import { connect } from "react-redux";

class Quote extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleFav = this.handleFav.bind(this);
  }

  handleFav() {
    this.props.dispatch({
      type: "NEW_FAVORITE",
      quote: { author: this.props.author, quote: this.props.quote }
    });
  }

  handleClick() {
    this.props.dispatch({
      type: "FLIP_QUOTE",
      quote: {
        author: this.props.author,
        quote: this.props.quote,
        flipped: !this.props.flipped
      }
    });
  }

  render() {
    var classNames = "quote";
    if (this.props.flipped) {
      classNames += " back";
    }

    if (this.props.favorite) {
      classNames += " favorite";
    }
    return (
      <div className={classNames}>
        <h2>{this.props.flipped ? this.props.author : this.props.quote}</h2>
        <button onClick={this.handleClick}>Flip</button>
        {!this.props.favorite ? <button onClick={this.handleFav}>Make Fav</button> : <span />}
      </div>
    );
  }
}

export default connect()(Quote);
