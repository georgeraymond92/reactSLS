import React, { Component } from 'react';
import './App.css';
import Main from './main';
import Client from './clients';
import Team from './team';
import Contact from './contacts'


class App extends Component {
  render() {
    return (
      <div className ="App">
      <Main />
      < Client />
      < Team />
      < Contact />
      </div>
     
    );
  }
}

export default App;
