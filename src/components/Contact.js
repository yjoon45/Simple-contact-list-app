import React, { Component } from "react";
import { Link } from "react-router";
import { deleteContact } from "../actions/contact-actions";

export default class Contact extends Component {
  deleteContact (e) {
    e.preventDefault();
    deleteContact(this.props.contact.id);
  }

  render () {
    const { id, name, email, phone } = this.props.contact;
    return (
      <tr>
        <td>{name}</td>
        <td>{email}</td>
        <td>{phone}</td>
        <td>
          <Link to={`/contact/edit/${id}`} className="btn btn-sm btn-warning">Edit</Link>
          {' '}
          <Link to="#" onClick={this.deleteContact.bind(this)} className="btn btn-sm btn-danger">Delete</Link>
        </td>
      </tr>
    );
  }
}
