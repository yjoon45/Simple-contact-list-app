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
        return state;
      }
      default: return state;
    }
  }
}

export default new ContactStore();