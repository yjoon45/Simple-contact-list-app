import React, { Component } from "react";
import { Container } from "flux/utils";
import ContactStore from "../stores/contact-store";
import { getAllContacts } from "../actions/contact-actions";

class AppContainer extends Component {
  static getStores () {
    return [ContactStore];
  }

  static calculateState (prevState) {
    return {
      contacts: ContactStore.getState(),
    };
  }

  componentDidMount () {
    getAllContacts();
  }

  render () {
    return React.cloneElement(this.props.children, {...this.state});
  }
}

export default Container.create(AppContainer);
