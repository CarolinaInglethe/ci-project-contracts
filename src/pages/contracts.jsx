import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import InfoContext from '../context/infoContext';
import Table from '../components/table';
import FormSearch from '../components/formSearch';


function Contracts() {
  const { infoUserContext } = useContext(InfoContext);

  const { 
    allContracts, setAllContracts 
  } = useContext(InfoContext);
  
  // função para requisiçao authentica e pega contratos: 
  const requestAllContracts = async () => {
    const headerAuth = { 
      headers: { 
        authorization: infoUserContext.token 
      } 
    }

    const getContracts = await axios
    .get('http://localhost:3001/contracts', headerAuth)
    .then((res) => res.data)
    .catch((err) => null)

    if (!getContracts) return "Falha na requisiçao"

    setAllContracts(getContracts)
    return console.log(allContracts)
  };
  // -------

  useEffect(() => {
    requestAllContracts()
  }, [])

  return (
    <div className="container-contracts">

      <header className="container-contracts-header">
        <Link to="/"  className="route-link">Sair</Link>
        <Link to="/createContract" className="route-link">+ New contract</Link>
      </header>

      <div className="conteiner-contracts-results">
        {/* <FormSearch /> */}
        <Table/>
      </div>

    </div>
  );
};

export default Contracts;
