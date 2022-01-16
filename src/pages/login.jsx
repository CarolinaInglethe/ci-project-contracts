import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import InfoContext from '../context/infoContext';

function Login() {
  const [ userName, setUserName ] = useState('');
  const [ password, setPassword ] = useState('');
  const navigate = useNavigate();

  // informaçoes de usuario logado no context:
  const { 
    infoUserContext, 
    setInfoUserContext 
  } = useContext(InfoContext)

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
      .catch((err) => "Houve um erro na requisição");

    if (!resOfRequest.token) {
      return alert("Nome de usuario ou senha incorreto");
    };

    setInfoUserContext(infoUserContext);
    
    // react router v6 usa navegate para navegar de pagina:
    return navigate('/contracts')
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