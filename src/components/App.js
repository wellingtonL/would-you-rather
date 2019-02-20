import React, { Component } from 'react';
import Nav from './Nav.js';
import Routes from './Routes.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Routes />

      </div>
    );
  }
}

export default App;
