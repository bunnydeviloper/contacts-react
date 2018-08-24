import React, { Component } from 'react';

class ListContacts extends Component {

  render() {
    return (
      <ol className="contact-list">
        {this.props.contacts.map((contact) => (
          <li key={contact.id} className="contact-list-item">
            <div className="contact-avatar" style={{ backgroundImage: `url(${contact.avatarURL})` }}/>
            <img className="contact-avatar" src={contact.avatarURL} alt={contact.name} />
            <div className="contact-details">
              <p>{contact.name}</p>
              <p>{contact.email}</p>
            </div>
            <button className="contact-remove">
              Remove
            </button>
          </li>
        ))}
      </ol>
    );
  }
}

export default ListContacts;
