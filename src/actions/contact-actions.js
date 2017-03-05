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

export function deleteContact (id) {
  Dispatcher.dispatch({
    type: "DELETE_CONTACT",
    id
  });
}

export function updateContact (payload) {
  Dispatcher.dispatch({
    type: "UPDATE_CONTACT",
    payload
  });
}
