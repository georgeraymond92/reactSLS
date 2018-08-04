import React, { Component } from 'react';
import './App.css';
import Client from './clients';
import Team from './team';
import Contact from './contacts';
import About from './about';
import Header from './header';
import Nav from './nav';
import Services from './services';
import Footer from './footer';
import Form from './form';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Header />
        <Form />
        <Services />
        <About />
        <Team />
        <Client />
        <Contact />
        <Footer />
      </div>     
    );
  }
};

export default App;
