import Dispatcher from "../dispatcher";

export function createContact (payload) {
  Dispatcher.dispatch({
    type: "CREATE_CONTACT",
    payload,
  });
}

export function getAllContacts () {
  Dispatcher.dispatch({type: "SHOW_ALL"});
}
