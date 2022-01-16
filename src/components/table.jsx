import React, {useContext} from 'react';
import InfoContext from '../context/infoContext';


function Table() {
  const { allContracts } = useContext(InfoContext);
  
  if (allContracts.length < 1) {
    return <h3>Carregando Tabela...</h3>;
  }
  
  return (
    <div>
      <p>Contratos</p>
      <table>
        <thead>
          <tr>
            {
              // popula as colunas com o nome das chaves do contrato na posiçao 0
              Object.keys(allContracts[0]).map((columnContract, index) => (
                <th key={ index }>{columnContract}</th>
              ))
            }
          </tr>
        </thead>
        {/* <tbody>
          {
            // passa por cada contrato
            allContracts.map((contract, index0) => (
              <tr key={ index0 }>
                {
                  // passa por cada chave/valor do contrato da vez
                  Object.values(contract).map((info, index1) => (
                    <td key={ index1 }>
                      {info}
                    </td>
                  ))
                }
              </tr>
            ))
          }
        </tbody> */}
      </table>
    </div>
  );
}
  
  export default Table;