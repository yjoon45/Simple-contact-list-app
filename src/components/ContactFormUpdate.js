import React, { Component } from "react";
import { updateContact } from "../actions/contact-actions";
import { browserHistory, Link } from "react-router";

export default class ContactForm extends Component {
  handleSubmit (e) {
    e.preventDefault();
    const { id, name, email, phone } = this.refs;
    const contact = {
      id: this.props.params.id,
      name: name.value,
      email: email.value,
      phone: phone.value
    };
    updateContact(contact);
    this.refs.name.value = '';
    this.refs.email.value = '';
    this.refs.phone.value = '';
    browserHistory.push('/');
  }

  render () {
    const contact = this.props.contacts.find(c => c.id == this.props.params.id);
    if (!!contact) {
      return (
        <div class="container">
          <h1 class="text-center">Edit contact</h1><br/>
          <div class="row justify-content-md-center">
            <div class="col-sm-6">
              <form onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group">
                  <input type="text" ref="name" className="form-control" defaultValue={contact.name} placeholder="Name" required={true} />
                </div>
                <div className="form-group">
                  <input type="email" ref="email"  className="form-control" defaultValue={contact.email} placeholder="Email" required={true} />
                </div>
                <div className="form-group">
                  <input type="text" ref="phone" className="form-control" defaultValue={contact.phone} placeholder="Phone" required={true} />
                </div>
                <input type="submit" value="Update contact" className="float-right btn btn-primary"/>
              </form>
            </div>
          </div>
        </div>
      );
    }
    else {
      return <h4 class="text-center">No contact found</h4>
    }
  }
}
