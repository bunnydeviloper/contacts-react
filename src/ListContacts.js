import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';

class ListContacts extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
  }

  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
  }

  clearQuery = () => {
    this.setState({ query: '' });
    // you can also write: this.updateQuery('');
  }

  render() {
    // use object destructuring to make our code cleaner
    const { contacts, onDeleteContact } = this.props;
    const { query } = this.state;

    let showingContacts;
    if (query) {
      // ignore special characters in query string, and ignore upper/lower cases
      const match = new RegExp(escapeRegExp(query), 'i');

      showingContacts = contacts.filter((contact) => {
        // String.match() is a method uses RegExp to verify patterns of text
        return match.test(contact.name) || match.test(contact.email);
      });
    } else {
      showingContacts = contacts;
    }

    showingContacts.sort(sortBy('name'));

    // if you want to see the current state on the UI, insert this in html return
    // {JSON.stringify(this.state)}

    return (
      <div className="list-contacts">
        <div className="list-contacts-top">
          <input
            className="search-contacts"
            type="text"
            placeholder="Search contacts"
            value={query}
            onChange={(event) => this.updateQuery(event.target.value)}
          />
          <Link to="/create"
            className="add-contact"
          >Add Contact</Link>
        </div>

        {showingContacts.length !== contacts.length && /* conditional AND render if true */ (
          <div className="showing-contacts">
            <span>Now showing {showingContacts.length} of {contacts.length}</span>
            <button onClick={this.clearQuery}>Show All</button>
          </div>
        )}

        <ol className="contact-list">
          {showingContacts.map((contact) => (
            <li key={contact.id} className="contact-list-item">
              <div className="contact-avatar" style={{
                backgroundImage: `url(${contact.avatarURL})`
              }}/>
              <div className="contact-details">
                <p>{contact.name}</p>
                <p>{contact.email}</p>
              </div>
              <button onClick={() => onDeleteContact(contact)} className="contact-remove">
                Remove
              </button>
            </li>
          ))}
        </ol>
      </div>
    )
  }
}

/*
// stateless functional component
function ListContacts (props) {
  return (<div>
    {props.contacts}
    </div>
  )
}
*/

export default ListContacts;
