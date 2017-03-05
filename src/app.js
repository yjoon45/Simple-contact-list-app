import React, { Component } from "react";
import { render } from "react-dom";
import AppContainer from "./containers/AppContainer";
import { Router, Route, IndexRoute, browserHistory, Link } from "react-router";

import ContactForm from "./components/ContactForm";

render((
  <AppContainer>
    <Router history={browserHistory}>
      <Route path="/" component={ContactForm} />
    </Router>
  </AppContainer>
), document.getElementById('container'));
