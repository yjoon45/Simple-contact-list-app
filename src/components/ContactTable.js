import React, { Component } from "react";
import { Link } from "react-router";
import Contact from "./Contact";

export default class ContactTable extends Component {
  render () {
    const { contacts } = this.props;
    return (
      <div className="container">
        <h1 className="text-center">Contacts</h1>
        <p>
          <Link to="contact/create" className="btn btn-primary">Create new contact</Link>
        </p>
        {contacts.length && (
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone number</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map(contact =>
                <Contact key={contact.id} contact={contact} />
              )}
            </tbody>
          </table>)}
      </div>
    )
  }
}
