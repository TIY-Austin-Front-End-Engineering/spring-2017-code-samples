import React from "react";
import { connect } from "react-redux";
import Quote from "./quote.js";

class Quotes extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("Flipped!");
  }

  render() {
    return (
      <section>
        <header>
          <h1>Best Quotes of All Time! (BQAT)</h1>
        </header>
        <div className="quotes">
          <Quote
            favorite={true}
            author={this.props.favoriteQuote.author}
            quote={this.props.favoriteQuote.quote}
          />
          {this.props.quotes.map((quoteObj, index) => {
            if (
              quoteObj.author === this.props.favoriteQuote.author &&
              quoteObj.quote === this.props.favoriteQuote.quote
            ) {
              return <span key={index} />;
            } else {
              return <Quote key={index} author={quoteObj.author} quote={quoteObj.quote} />;
            }
          })}
        </div>
        <footer>
          Made with 💕 by Me. Copyright @_@
        </footer>
      </section>
    );
  }
}

export default connect(state => state)(Quotes);
