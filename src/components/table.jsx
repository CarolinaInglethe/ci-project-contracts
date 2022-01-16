import React, {useContext} from 'react';
import InfoContext from '../context/infoContext';


function Table() {
  const { allContracts } = useContext(InfoContext);
  
  if (allContracts.length < 1) {
    return <h3>Carregando Tabela...</h3>;
  }

  const columns = [
    "Document Number", "Social Reason",
    "Company", "Distributor", "Actions"
  ];
  
  return (
    <div className="container-table">
      <p>Contratos</p>
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
                  <button>Editar</button>
                  <button>Apagar</button>
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