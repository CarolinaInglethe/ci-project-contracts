import axios from 'axios';
import React, {useContext} from 'react';
import InfoContext from '../context/infoContext';


function Table() {
  const { allContracts, infoUserContext } = useContext(InfoContext);
  
  if (allContracts.length < 1) {
    return <h3>Carregando Tabela...</h3>;
  }

  const columns = [
    "Document Number", "Social Reason",
    "Company", "Distributor", "Actions"
  ];

  // incompleto
  const handleClickUpdate = ({ target }) => {
    axios.put(`http://localhost:3001/contracts/${target.value}`)
    .then((res) => res)
    .catch((err) => console.log("err"))
  };

  // progresso
  const handleClickDelete = ({ target }) => {
    const deletedContract = axios.delete(`http://localhost:3001/contracts/${target.value}`)
    .then((res) => res.data)
    .catch((err) => "err")

    // const headerAuth = { 
    //   headers: { 
    //     authorization: infoUserContext.token 
    //   } 
    // }

    // const allcontracts = axios.get('http://localhost:3001/contracts', headerAuth)
    // .then((res) => res.data)
    // .catch((err) => console.log("err"))

    return console.log(deletedContract)
    
  };
  
  return (
    <div className="container-table">
      <h3>Contratos</h3>
      <table>
        <thead>
          <tr>
            {
              // popula as colunas com o nome das chaves do contrato na posiçao 0
              columns.map((columnName, index) => (
                <th key={ index }>{columnName}</th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {
            // passa por cada contrato
            allContracts.map((contract, index0) => (
              <tr key={ index0 }>
                <td key={ index0 + 1 }>
                    {contract.documentNumber}
                </td>
                <td  key={ index0 + 2 }>
                    { contract.socialReason }
                </td>
                <td>
                    { contract.company }
                </td>
                <td>
                    { contract.distributor }
                </td>
                <td>
                  <button 
                    type="button"
                    value={contract._id } 
                    onClick={ handleClickUpdate } 
                  >
                    Editar
                  </button>
                  <button 
                    type="button"
                    value={ contract._id } 
                    onClick={ handleClickDelete }
                    >
                    Apagar
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}
  
  export default Table;