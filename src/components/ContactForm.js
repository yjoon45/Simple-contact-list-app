import React, { Component } from "react";
import { createContact } from "../actions/contact-actions";
import { browserHistory, Link } from "react-router";

export default class ContactForm extends Component {
  handleSubmit (e) {
    e.preventDefault();
    const { name, email, phone } = this.refs;
    const contact = {
      name: name.value,
      email: email.value,
      phone: phone.value
    };
    createContact(contact);
    this.refs.name.value = '';
    this.refs.email.value = '';
    this.refs.phone.value = '';
    browserHistory.push('/');
  }

  render () {
    return (
      <div class="container">
        <h1 class="text-center">
          Create contact {' '}
          <small>
            <Link to="/">Show all contacts</Link>
          </small>
        </h1><br/>
        <div class="row justify-content-md-center">
          <div class="col-sm-6">
            <form onSubmit={this.handleSubmit.bind(this)}>
              <div className="form-group">
                <input type="text" ref="name" className="form-control" placeholder="Name" required={true} />
              </div>
              <div className="form-group">
                <input type="email" ref="email"  className="form-control" placeholder="Email" required={true} />
              </div>
              <div className="form-group">
                <input type="text" ref="phone" className="form-control" placeholder="Phone" required={true} />
              </div>
              <input type="submit" value="Add contact" className="float-right btn btn-primary"/>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
