import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

class ContactList extends React.Component {
  // class ContactList extends Component {...}
  render() {
    const people = [
      {name: 'Michael'},
      {name: 'Sophia'},
      {name: 'Jack'}
    ];

    return <ol>
      {people.map(person => (
        <li key={person.name}>{person.name}</li>
      ))}
    </ol>
  }
}

/*
ReactDOM.render(
  <ContactList />,
  document.getElementById('root')
)
*/

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContactList />
        <ContactList />
        <ContactList />
      </div>
    );
  }
}

export default App;
