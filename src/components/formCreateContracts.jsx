import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import InfoContext from '../context/infoContext';

function FormCreateContract() {
  const navigate = useNavigate();
  // --- stado local:
  const [ infoInputs, setInfoInputs ] = useState({
    country: "", state: "", city:"", documentNumber:"", socialReason:"",
    address:"", district:"", number:"", zipCode:"", email:"",
    phone:"", contractsStartsIn:"", contractsEndsIn:"", company:""
  })
  const countries = [ "Brasil", "Alemanha", "Portugal", "Escócia", "Canada", "Coreia" ]
  const companies = [1,2,3,4,5,6,7,8,9,10]

  // --- estado global:
  const { infoUserContext, setAllContracts } = useContext(InfoContext)
  // --
  

  const handleChangeInputs = ({ target }) => {
    const { name, value } = target;

     setInfoInputs({
       ...infoInputs,
       [name]: value,
     })
     console.log(infoInputs)
  }

  const handleClickSubmit = async () => {
    // console.log(infoInputs)
    const headerAuth = {
      headers: { 
        "Content-Type": "application/json",
        authorization: infoUserContext.token 
      },
    }
    const body = infoInputs;
    // cria contrato :
    const reqCreateContract = await axios.post(
    'http://localhost:3001/createContract', body, headerAuth)
    .then((res) => res.data)
    .catch((er) => er.message)

    if (!reqCreateContract.documentNumber) {
      console.log(reqCreateContract)
      return alert("ERRO: Não foi possivel criar o contrato, erro interno")
    }

    // atualiza os contratos globais e na tabela:
    const requestAllContracts = await axios.get('http://localhost:3001/contracts', headerAuth)
    .then((res) => res.data)
    .catch((err) => [])
    setAllContracts(requestAllContracts);

    return navigate('/contracts')
  }

  return (
    <div>
      <form>
      <label htmlFor="country">
        * Country:
        <select 
          name="country"
          value={ infoInputs.country }
          onChange={ handleChangeInputs }
          required
        >
          <option value=""></option>
          {
            countries.map((country, i) => {
                return <option key={i} value={country}>{ country }</option>
            } )
          }
        </select>    
      </label>

      <label htmlFor="state"> State: 
        <input 
          type="text" 
          name="state" 
          value={infoInputs.state}
          onChange={ handleChangeInputs }
        /> 
      </label>

      <label htmlFor="city"> city: 
        <input 
          type="text" 
          name="city"
          value={ infoInputs.city }
          onChange={ handleChangeInputs }
        /> 
      </label>

      <label htmlFor="documentNumber"> * Document Number: 
        <input 
          type="number" 
          name="documentNumber"
          value={ infoInputs.documentNumber }
          onChange={ handleChangeInputs }
          required
        /> 
      </label>

      <label htmlFor="socialReason"> * social Reason: 
        <input 
          type="number" 
          name="socialReason"
          value={ infoInputs.socialReason }
          onChange={ handleChangeInputs }
          required
        />
      </label>

      <label htmlFor="address"> Address: 
        <input 
          type="text" 
          name="address"
          value={ infoInputs.address }
          onChange={ handleChangeInputs }
        /> 
      </label>

      <label htmlFor="district"> district:
        <input 
          type="text" 
          name="district"
          value={ infoInputs.district }
          onChange={ handleChangeInputs }
        />
      </label>

      <label htmlFor="number"> Number: 
        <input 
          type="number" 
          name="number"
          value={ infoInputs.number }
          onChange={ handleChangeInputs }
        />
      </label>

      <label htmlFor="zipCode"> Zip Code: 
        <input 
          type="number"
          name="zipCode"
          value={ infoInputs.zipCode }
          onChange={ handleChangeInputs }
        />
      </label>

      <label htmlFor="email"> * Email: 
        <input 
          type="email" 
          name="email"
          value={ infoInputs.email }
          onChange={ handleChangeInputs }
          required
        />
      </label>

      <label htmlFor="phone"> Phone: 
        <input 
          type="number" 
          name="phone"
          value={ infoInputs.phone }
          onChange={ handleChangeInputs }
        />
      </label>

      <label htmlFor="contractsStartsIn"> contracts Starts In: 
        <input 
          type="date" 
          name="contractsStartsIn"
          value={ infoInputs.contractsStartsIn }
          onChange={ handleChangeInputs }
        />
      </label>

      <label htmlFor="ContractsEndsIn"> Contracts Ends In: 
        <input 
          type="date" 
          name="contractsEndsIn"
          value={ infoInputs.contractsEndsIn }
          onChange={ handleChangeInputs }
        />
      </label>

      <label htmlFor="company">
        * Company:
        <select 
          name="company"
          value={ infoInputs.company }
          onChange={ handleChangeInputs }
          required
        >
          <option value=""></option>
          {
            companies.map((comp, i) => {
                return <option key={i} value={comp}>{ comp }</option>
            } )
          }
        </select>    
      </label>

      <button 
          className="button-create-contract" 
          type="submit"
          onClick={ handleClickSubmit }
        >
          Criar
        </button>
      </form>
    </div>
  );
};

export default FormCreateContract;