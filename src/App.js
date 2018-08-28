import React, { Component } from 'react';
import ListContacts from './ListContacts';
import { Route } from 'react-router-dom';
import CreateContact from './CreateContact.js';
import * as ContactsAPI from './utils/ContactsAPI';

class App extends Component {
  state = {
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

  createContact(contact) {
    ContactsAPI.create(contact).then(contact => {
      this.setState(state => ({
        contacts: state.contacts.concat([ contact ])
        // contacts: [...state.contacts, ...[contact]] // using the new ES6 spread syntax
      }))
    })
  }

  render() {
    return (
      <div>
        <Route exact path="/" render={() => (
          <ListContacts
            contacts={this.state.contacts}
            onDeleteContact={this.removeContact}
          />
        )}
      />
      <Route path="/create" render={({ history }) => (
        <CreateContact
          onCreateContact={(contact) => {
            this.createContact(contact)
            history.push('/')
          }}
        />
      )} />
    </div>
    )
  }
}

export default App;
