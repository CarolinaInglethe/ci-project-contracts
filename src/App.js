import { Router, Route } from 'react-router-dom';
import React from 'react';
// import './App.css';

import Login from "./pages/login"

function App() {
    return (
      <Router basename={ process.env.PUBLIC_URL }>
        <Route path="/" component={ Login } />
      </Router>
    );
};

export default App;