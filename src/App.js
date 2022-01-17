import React from 'react';
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import InfoProvider from './context/infoProvider';
import Login from "./pages/login"
import Contracts from "./pages/contracts"
import CreateContract from './pages/createContract'


function App() {
  return (
    <BrowserRouter>

      <InfoProvider>

      <Routes> 
        <Route path="/" element={ <Login/> }/>
        <Route path="/contracts" element={ <Contracts/> } />
        <Route path="/createContract" element={ <CreateContract/> } />
      </Routes>
      
      </InfoProvider>

    </BrowserRouter> 
  );
};

export default App;