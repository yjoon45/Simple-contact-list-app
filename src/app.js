import React, { Component } from "react";
import { render } from "react-dom";
import AppContainer from "./containers/AppContainer";
import { Router, Route, IndexRoute, browserHistory, Link } from "react-router";

import ContactForm from "./components/ContactForm";
import ContactTable from "./components/ContactTable";

render((
  <Router history={browserHistory}>
    <Route path="/" component={AppContainer}>
      <IndexRoute component={ContactTable} />
      <Route path="/create" component={ContactForm} />
    </Route>
  </Router>
), document.getElementById('container'));
