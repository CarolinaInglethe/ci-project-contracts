import React, { useState } from 'react';
import PropTypes from 'prop-types';
import InfoContext from './infoContext';

// funçao apenas  gerenciar um estado e retornar um Provider:
function InfoProvider({ children }) {
  const [ infoUserContext, setInfoUserContext ] = useState('');
  const [allContracts, setAllContracts] = useState([]);

  const contextValues = {
    infoUserContext,
    setInfoUserContext,
    allContracts,
    setAllContracts,
  }

  return (
    // diponibiliza os estados da funcao anterio para o context criado em outro arquivo
    // e adiciona o provider que ira englobar toda aplicaçao
    <InfoContext.Provider value={ contextValues }>
        { children }
    </InfoContext.Provider>
  );
};

export default InfoProvider;

InfoProvider.propTypes = {
  children: PropTypes.node.isRequired
};