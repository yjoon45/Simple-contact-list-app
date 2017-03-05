import React, { Component } from "react";
import { Container } from "flux/utils";
import ContactStore from "../stores/contact-store";

class AppContainer extends Component {
  static getStores () {
    return [ContactStore];
  }

  static calculateState (prevState) {
    return {
      contacts: ContactStore.getState(),
    };
  }

  render () {
    return this.props.children;
  }
}

export default Container.create(AppContainer);
