import React, { useState } from 'react';
import PropTypes from 'prop-types';
import InfoContext from './infoContext';

function InfoProvider({ children }) {
  const [ infoUserContext, setInfoUserContext ] = useState('');


  const contextValues = {
    infoUserContext,
    setInfoUserContext,
  }

  return (
    <InfoContext.Provider value={ contextValues }>
        { children }
    </InfoContext.Provider>
  );
};

export default InfoProvider;

InfoProvider.propTypes = {
  children: PropTypes.node.isRequired
};