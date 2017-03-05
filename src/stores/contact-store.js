import Dispatcher from "../dispatcher";
import { ReduceStore } from "flux/utils";

const contactsData = [];

class ContactStore extends ReduceStore {
  constructor () {
    super(Dispatcher);
  }

  getInitialState () {
    return contactsData;
  }

  reduce (state, action) {
    switch (action.type) {
      case "CREATE_CONTACT": {
        const newContact = Object.assign({}, action.payload, {
          id: +new Date,
        });
        const newState = state.concat(newContact);
        localStorage.setItem('contacts', JSON.stringify(newState));
        return newState;
      }
      case "SHOW_ALL": {
        const item = JSON.parse(localStorage.getItem('contacts'));
        return !!item ? item : state;
      }
      default: return state;
    }
  }
}

export default new ContactStore();
