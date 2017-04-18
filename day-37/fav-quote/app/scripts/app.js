import store from "./store.js";
import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { render } from "react-dom";
import { Provider } from "react-redux";
import Quotes from "./components/quotes.js";
import Flipped from "./components/flipped.js";

export default function app() {
  render(
    <Provider store={store}>
      <Router>
        <div>
          <NavLink to="/flipped">See Only Flipped</NavLink>
          <NavLink to="/">See All</NavLink>
          <Route exact path="/" component={Quotes} />
          <Route path="/flipped" component={Flipped} />
        </div>
      </Router>
    </Provider>,
    document.getElementById("app")
  );
}
