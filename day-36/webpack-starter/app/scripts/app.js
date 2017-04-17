import store from "./store.js";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { render } from "react-dom";
import { Provider } from "react-redux";
import Quotes from "./components/quotes.js";

const FooBar = () => <div>Hi</div>;

export default function app() {
  render(
    <Provider store={store}>
      <Router>
        <div>
          <Route path="/" component={Quotes} />
          {/* <Route path="/quotes/:id" component={Quote} /> */}
        </div>
      </Router>
    </Provider>,
    document.getElementById("app")
  );
}
