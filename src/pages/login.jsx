import React from 'react';

function Login() {
    return (
      <div className="container-login">

        <h1> Login </h1>
          <input
            className="input-login"
            name="username"
            type="text"
            placeholder="Usename"
          />
          <input 
            className="input-login"
            name="password"
            type="password"
            placeholder="Password" 
          />

          <button
          className="input-login-button"
            type="submit"

          >
            Entrar
          </button>

      </div> 
    );
}

export default Login;