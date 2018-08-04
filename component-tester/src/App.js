import React, { Component } from 'react';
import './App.css';
import Header from './header';
import Service from './services';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Service />
      </div>     
    );
  }
}

export default App;
