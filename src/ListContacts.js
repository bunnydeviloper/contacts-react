import React from 'react';
// import React, { Component } from 'react';

// stateless functional component
function ListContacts (props) {
  return (
    <ol className="contact-list">
      {props.contacts.map((contact) => (
        <li key={contact.id} className="contact-list-item">
          <div className="contact-avatar" style={{
            backgroundImage: `url(${contact.avatarURL})`
          }}/>
          <div className="contact-details">
            <p>{contact.name}</p>
            <p>{contact.email}</p>
          </div>
          <button onClick={() => props.onDeleteContact(contact)} className="contact-remove">
            Remove
          </button>
        </li>
      ))}
    </ol>
  );
}

/*
class ListContacts extends Component {
  render() {
    return (<div>
      {this.props.contacts}}
      </div>
    )
  }
}
*/

export default ListContacts;
