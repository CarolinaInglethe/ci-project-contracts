import React from 'react';
import FormCreateContract from '../components/formCreateContracts';
import { Link } from 'react-router-dom';

function CreateContract() {

  return (
    <div className="container-create-contract">

      <header className="container-contracts-header">
        <Link to="/contracts" className="route-link">voltar</Link>
        <Link to="/"  className="route-link">Sair</Link>
      </header>

      <FormCreateContract />
    </div>
  );
};

export default CreateContract;