import React, { Component } from 'react';
import ListContacts from './ListContacts';
import CreateContact from './CreateContact.js';
import * as ContactsAPI from './utils/ContactsAPI';

class App extends Component {
  state = {
    screen: 'list', // screen is either 'list' or 'contact'
    contacts:  []
  }

  componentDidMount() {
    ContactsAPI.getAll().then((contacts) => {
      this.setState({ contacts })
    // same as:
    // ContactsAPI.getAll().then((data) => {
    //   this.setState({ contacts: data })
    // })
    })
  }

  removeContact = (contact) => {
    this.setState((state) => ({
      contacts: state.contacts.filter((c) => c.id !== contact.id)
    }))

    // remove from database as well
    ContactsAPI.remove(contact)
  }

  render() {
    return (
      <div>
        {this.state.screen === 'list' && (
          <ListContacts
            onDeleteContact={this.removeContact}
            contacts={this.state.contacts}
          />
        )}
        {this.state.screen === 'contact' && (
          <CreateContact />
        )}
      </div>
    )
  }
}

export default App;
