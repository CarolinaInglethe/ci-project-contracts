import React from 'react';

function FormSearch() {

const N = [1,2,3,4,5,6,7,8,9,10]

  return (
    <div className="container-form-search">
      
      <form>
        <label htmlFor="documentNumber">
            Document Number:
            <input 
              type="text"
              name="documentNumber"  
            />
        </label>

        <label htmlFor="socialReason">
          Social Reason:
          <input 
            type="text" 
            name="socialReason" 
          />
        </label>

        <label htmlFor="company">
          Company:
          <select 
            type="column"
            name="company" 
          >
            <option value=""></option>
             {
               N.map((cpm) => (
                <option value={cpm}>{ `Company ${cpm}` }</option>
               ))
             }
          </select>
        </label>

        <label htmlFor="distributor">
          Distributor:
          <select 
            type="column"
            name="distributor" 
          >
            <option value=""></option>
             {
               N.map((dis) => (
                <option value={dis}>{ `Distributor ${dis}` }</option>
               ))
             }
          </select>
        </label>

        <button> Search </button>
      </form>

    </div>
  );
};

export default FormSearch;