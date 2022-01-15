import { Router, Route } from 'react-router-dom';
import React, { Component } from 'react';
// import './App.css';

import Login from "./pages/login"

class App extends Component {
  render() {
    return (
      <Router basename={ process.env.PUBLIC_URL }>
        <Route path="/" component={ Login } />
      </Router>
    );
  };
}

export default App;