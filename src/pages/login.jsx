import React, { useState } from 'react';
import axios from 'axios'
// import InfoContext from '../context/infoContext';

function Login() {
  // const { 
  //   infoUserContext, 
  //   setInfoUserContext 
  // } = useContext(InfoContext)

  const [ userName, setUserName ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleChangeUserName = ({ target }) => {
    setUserName(target.value)
  };

  const handleChangePassword = ({ target }) => {
    setPassword(target.value)
  };

  const handleClickSubmit = async () => {
    const bodyUser = {
      username: userName,
      password: Number(password),
    };

    const resOfRequest = await axios.post('http://localhost:3001',  bodyUser )
      .then((res) => res.data)
      .catch((err) => "erro na requisiçao")

    return console.log(resOfRequest)
  }

    return (
      <div className="container-login">

        <h1> Login </h1>
          <input
            className="input-login"
            name="username"
            type="text"
            placeholder="Usename"
            value={ userName }
            onChange={ handleChangeUserName }
          />
          <input 
            className="input-login"
            name="password"
            type="password"
            placeholder="Password" 
            value={ password }
            onChange={ handleChangePassword }
          />

          <button
            className="input-login-button"
            type="submit"
            onClick={ handleClickSubmit }
          >
            Entrar
          </button>

      </div> 
    );
}

export default Login;