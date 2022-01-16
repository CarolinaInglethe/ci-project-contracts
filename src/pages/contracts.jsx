import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import InfoContext from '../context/infoContext';
import { Link } from 'react-router-dom';

function Contracts() {
  const { infoUserContext } = useContext(InfoContext);
  const [allContracts, setAllContracts] = useState([]);
  
  // função para requisiçao authentica e pega contratos: 
  const requestContracts = async () => {
    const headerAuth = { 
        headers: { authorization: infoUserContext.token } 
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
    requestContracts()
  }, [])

  return (
    <div className="container-contracts">

      <header className="container-contracts-header">
        <Link to="/" >Sair</Link>
      </header>

      <nav className="container-contracts-nav">
        <Link to="/createContract" >+ New contract</Link>
      </nav>

      <div className="conteiner-contracts-results">
        {
          allContracts.length < 1
          ? <h1>Carregando...</h1>
          : allContracts.map((contract) => {
            return <h1>{ contract.documentNumber }</h1>
           })
        }
      </div>
     
      
    </div>
  );
};

export default Contracts;
