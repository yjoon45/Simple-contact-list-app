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
        const newContact = {...action.payload, id: +new Date};
        console.log(state);
        const newState = state.concat(newContact);
        localStorage.setItem('contacts', JSON.stringify(newState));
        return newState;
      }
      case "DELETE_CONTACT": {
        const filter = state.filter(s => s.id != action.id);
        localStorage.setItem('contacts', JSON.stringify(filter));
        return filter;
      }
      case "UPDATE_CONTACT": {
        const updateC = state.map(s => {
          if (s.id == action.payload.id) {
            s = action.payload;
          }
          return s;
        });
        localStorage.setItem('contacts', JSON.stringify(updateC));
        return updateC;
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
