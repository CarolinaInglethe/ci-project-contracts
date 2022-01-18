import React, { useState } from 'react';

function FormCreateContract() {
  const [ infoInputs, setInfoInputs ] = useState({
    country: "", state: "", city:"", documentNumber:"", socialReason:"",
    address:"", district:"", number:"", zipCode:"", email:"",
    phone:"", contractsStartsIn:"", contractsEndsIn:"", selectCompany:""
  })

  const countries = [ "Brasil", "Alemanha", "Portugal", "Escócia", "Canada", "Coreia" ]
  const companies = [1,2,3,4,5,6,7,8,9,10];

  const handleChangeInputs = ({ target }) => {
    const { name, value } = target;
     setInfoInputs({
       [name]: value,
     })
    // console.log(infoInputs[name])
  }

  // const handleClicSelects = ({ target }) => {

  // }

  const handleClickSubmit = () => {
      
  }

  return (
    <div>
      <form>
      <label htmlFor="country">
        * Country:
        <select 
          name="contry"
          value={ infoInputs.country }
          onChange={ handleChangeInputs }
        >
          <option value=""></option>
          {
            countries.map((country) => {
                return <option value={country}>{ country }</option>
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
        /> 
      </label>

      <label htmlFor="socialReason"> * social Reason: 
        <input 
          type="number" 
          name="socialReason"
          value={ infoInputs.socialReason }
          onChange={ handleChangeInputs }
        />
      </label>

      <label htmlFor="address"> Address: 
        <input 
          type="text" 
          name="address"
          value={ infoInputs.address }
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

      <label htmlFor="selectCompany"> select Company: 
        <select 
          name="selectCompany" 
          value={ infoInputs.selectCompany }
          onChange={ handleChangeInputs } 
        >
            <option value=""></option>
            {
              companies.map((comp) => {
                return <option value={comp}>{comp}</option>
              })
            }
        </select>
      </label>

      </form>
      <footer>
        <button 
          className="button-create-contract" 
          type="submit"
          onClick={ handleClickSubmit }
        >
          Criar
        </button>
      </footer>
    </div>
  );
};

export default FormCreateContract;