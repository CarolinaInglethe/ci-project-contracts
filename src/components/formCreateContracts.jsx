import React, { useState } from 'react';

function FormCreateContract() {
  const [ infoNewContract, setInfoNewContract ] = useState({})

  const countries = [ "Brasil", "Alemanha", "Portugal", "Escócia", "Canada", "Coreia" ]
  const companies = [1,2,3,4,5,6,7,8,9,10];

  const handleChangeInputs = ({ target }) => {

  }

  const handleClicSelects = ({ target }) => {

  }

  const handleClickSubmit = () => {
      
  }

  return (
    <div>
      <form>
      <label htmlFor="country">
        * Country:
        <select name="contry" >
          <option value=""></option>
          {
            countries.map((country) => {
                return <option value={country}>{ country }</option>
            } )
          }
        </select>    
      </label>

      <label htmlFor="state"> State: 
        <input type="text" name="state"/> 
      </label>

      <label htmlFor="city"> city: 
        <input type="text" name="city"/> 
      </label>

      <label htmlFor="documentNumber"> * Document Number: 
        <input type="text" name="documentNumber"/> 
      </label>

      <label htmlFor="socialReason"> * social Reason: 
        <input type="text" name="socialReason"/>
      </label>

      <label htmlFor="Adress"> Adress: 
        <input type="text" name="Adress"/> 
      </label>

      <label htmlFor="district"> district:
       <input type="text" name="district"/>
      </label>

      <label htmlFor="Number"> Number: 
        <input type="number" name="Number"/>
      </label>

      <label htmlFor="ZipCode"> Zip Code: 
        <input type="number" name="ZipCode"/>
      </label>

      <label htmlFor="Email"> * Email: 
        <input type="text" name="Email"/>
      </label>

      <label htmlFor="Phone"> Phone: 
        <input type="number" name="Phone"/>
      </label>

      <label htmlFor="contractsStartsIn"> contracts Starts In: 
        <input type="date" name="contractsStartsIn"/>
      </label>

      <label htmlFor="ContractsEndsIn"> Contracts Ends In: 
        <input type="date" name="ContractsEndsIn"/>
      </label>

      <label htmlFor="selectCompany"> select Company: 
        <select name="selectCompany">
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
        <button className="button-create-contract" type="button">Criar</button>
      </footer>
    </div>
  );
};

export default FormCreateContract;