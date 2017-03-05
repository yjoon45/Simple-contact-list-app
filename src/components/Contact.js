import React, { Component } from "react";
import { Link } from "react-router";

export default class Contact extends Component {
  render () {
    const { name, email, phone } = this.props.contact;
    return (
      <tr>
        <td>{name}</td>
        <td>{email}</td>
        <td>{phone}</td>
        <td>
          <Link to="#" className="btn btn-sm btn-warning">Edit</Link>
          {' '}
          <Link to="#" className="btn btn-sm btn-danger">Delete</Link>
        </td>
      </tr>
    );
  }
}
