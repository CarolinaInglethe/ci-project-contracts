import React from 'react';
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Login from "./pages/login"

function App() {
  return (
    <BrowserRouter>
      {/* <ul>
        <li>
          <Link to="/">Login</Link>
        </li>
        <li>
          <Link to="/contracts">Contratos</Link>
        </li>
        <li>
          <Link to="/createContract">Criar contrato</Link>
        </li>
      </ul> */}

      <Routes> 
        <Route path="/" element={ <Login/> }/>
      </Routes>
      

      {/* <Route path="/contracts">
        <Contracts />
      </Route>

      <Route path="/createContract">
        <CreateContract/>
      </Route> */}

    </BrowserRouter> 
  );
};

export default App;