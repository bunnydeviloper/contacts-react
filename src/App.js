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
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      </div>
    );
  }
}

export default App;
